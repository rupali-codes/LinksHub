import { FC, useState, useRef, useEffect } from 'react'
import {BsYoutube , BsPen} from 'react-icons/bs'
import {AiOutlineRead} from 'react-icons/ai'
import{MdArticle} from 'react-icons/md'
import { CopyToClipboard } from 'components/CopyToClipboard/CopyToClipboard'
import Share from 'components/Share/Share'
import type { IData } from 'types'
import { collection, addDoc, doc,updateDoc } from 'firebase/firestore'
import {db} from '../../firebase/Firebase'
import Image from 'next/image'
import { Timestamp } from 'firebase/firestore'

interface CardProps {
  data: IData,
}

export const Card: FC<CardProps> = ({ data }) => {
  const { name, description, url,subcategory } = data
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
  const dbInstance = collection(db,'resources')
  const [category, setCategory] = useState("")
  const [subCategory,setSubCategory] = useState("")
  const [likeCount,setLikeCount] = useState(0)
  const [tempLikeCount, setTempLikeCount]:any = useState([]);
  const timestamp = Timestamp.fromDate(new Date())
  const date = timestamp.toDate()
  const user = {
    name: 'Vidip',
    uid: 1234
  }
  
  const save = ()=>{
    const newItem = {
      name: name,
      description: description,
      url: url,
      category: category, 
      subCategory: subCategory,
      upvotedBy: user,
      upvotes: likeCount,
      created: date,
    }

    addDoc(dbInstance,newItem).then((doc)=>{
      console.log('Item added with ID',doc.id);
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  const likeHandler = async () => {
    if (likeCount !== undefined) {
      const idx = tempLikeCount.indexOf(user?.uid);
      if (idx !== -1) {
        tempLikeCount.splice(idx, 1);
        setLikeCount((currLikeNo) => currLikeNo - 1);
      } else {
        tempLikeCount.push(user?.uid);
        setLikeCount((currLikeNo) => currLikeNo + 1);
      }
      const data = {
        likeCount: tempLikeCount,
      };
      try {
        const docRef = doc(db, 'resources', 'yourDocumentID'); 
        await updateDoc(docRef, data);
        console.log('Update successful');
      } catch (error) {
        console.error('Update error:', error);
      }
    }
  };
  
  const handleClick = async()=>{
    await Promise.all([save(),likeHandler()]);
  }

  useEffect(() => {
    if (descriptionRef.current) {
      setIsOverflow(
        descriptionRef.current.scrollHeight >
          descriptionRef.current.offsetHeight
      )
    }
  }, [])

  return (
    <article className="z-10 h-full w-full rounded-3xl border border-dashed border-theme-secondary dark:border-theme-primary bg-[rgba(255,255,255,0.3)] shadow-md dark:bg-dark dark:text-text-primary dark:shadow-sm">
      <div className="card-body">
        <header className="flex justify-between items-center gap-2">
          <h2
            className="cursor-default md:truncate ... text-xl text-theme-secondary dark:text-theme-primary"
            title={name}
          >
            {name}
          </h2>
          <div className="flex items-center gap-1">
            <CopyToClipboard url={url} />
            <Share url={`${url}?ref=LinksHub`} title={name} />
          </div>
        </header>
        <div className="h-[7rem]" onClick={handleClick}>
          <div
            ref={descriptionRef}
            className="h-24 w-full overflow-hidden font-sans text-ellipsis line-clamp-4"
          >
            {description}
          </div>
          {isOverflow && (
            <p className="text-sm underline text-theme-secondary dark:text-theme-primary text-right hover:text-theme-primary dark:hover:text-text-primary">
              Read More
            </p>
          )}
        </div>
        {/* <button onClick={handleClick}><Image src="/upvote.png" alt="img" width={50} height={50} /></button> */}
        <footer className="card-actions justify-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-transparent bg-theme-secondary px-6 py-2 text-center text-light-primary duration-100 hover:border-theme-primary hover:bg-transparent hover:text-theme-secondary dark:hover:text-theme-primary'
            }
          >
            Visit site
            {youtubeRegex.test(url) ? <BsYoutube size="1.3em"/> : subcategory==='e-book'?<AiOutlineRead size="1.3em"/>:subcategory==='technical-writing-tools'?<BsPen size="1.2em"/>:<MdArticle size="1.3em"/>}
          </a>
        </footer>
      </div>
    </article>
  )
}
