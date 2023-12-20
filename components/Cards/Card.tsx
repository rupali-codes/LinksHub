import React, { FC, useState, useRef, useEffect } from 'react'
import {BsYoutube , BsPen} from 'react-icons/bs'
import {AiOutlineRead} from 'react-icons/ai'
import{MdArticle} from 'react-icons/md'
import { CopyToClipboard } from 'components/CopyToClipboard/CopyToClipboard'
import Share from 'components/Share/Share'
import type { IData } from 'types'
import { collection, doc,where,query,getDocs, setDoc,getDoc } from 'firebase/firestore'
import {db} from '../../firebase/Firebase'
import { Timestamp } from 'firebase/firestore'
import Image from 'next/image'

interface CardProps {
  data: IData,
}

export const Card: FC<CardProps> = ({ data }) => {
  const { name, description, url,subcategory } = data
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
  const id = data.url.replace(/[^\w\s]/gi, '');
  
  const [upvoteCount,setUpvoteCount] = useState(0)
  const [isUpvoted,setIsUpvoted] = useState(false);
  const timestamp = Timestamp.fromDate(new Date())
  const date = timestamp.toDate()
  const user = {
    name: 'Vidip',
    uid: 1234
  }
  const docRef = doc(db, 'resources', id)
  const save = async()=>{
    await setDoc(docRef, { 
      name: name,
      description: description,
      url: url,
      upvotedBy: user,
      upvotes: upvoteCount,
      created: date,
    }, 
      { merge: true }
    )
  }

  
  const addUserToAssetBookmark = async () => {
    try {
      const subcollectionRef = collection(db, 'resources')
      const assetQuery = query(subcollectionRef, where('name', '==', data.name))
      const assetQuerySnapshot = await getDocs(assetQuery)
      
      if (assetQuerySnapshot.empty) {
        console.log('Asset not found');
        return;
      }
  
      const assetDocSnapshot = assetQuerySnapshot.docs[0];
      const assetDocRef = doc(db, 'resources', data.name);
      const assetData = assetDocSnapshot.data();
      // console.log(assetData)
  
      const upvotes = assetData.upvotes || {};
      const userUid = user.uid;
  
      if (upvotes[userUid]) {
        // User has already upvoted, so remove their upvote
        delete upvotes[userUid];
      } else {
        // User has not upvoted, so add their upvote
        upvotes[userUid] = true;
      }
      await setDoc(assetDocRef, {
        ...assetData, // Keep existing data
        upvotes: upvotes,
      });
      
      const updatedAssetDoc = await getDoc(assetDocRef);
      if (!updatedAssetDoc.exists()) {
        console.log('Asset document not found');
        return;
      }
      const updatedUpvotes = updatedAssetDoc.data().upvotes || {};
      const upvoteCount = Object.keys(updatedUpvotes).length;
      setUpvoteCount(upvoteCount);
      console.log(upvoteCount);
    } catch (error) {
      console.error('Error adding user to asset upvotes:', error);
    }
  };
  
  const toggleUpvote = () => {
    setIsUpvoted(p => !p);
  };

  const handleClick = async(e: React.MouseEvent<HTMLButtonElement >)=>{
    e.stopPropagation();
    e.preventDefault();
    toggleUpvote();
    save();
    await addUserToAssetBookmark();
  }
  
  // function Img({ url }:{url: string}) {
  //   return (
  //     <Image src={`${url}`} alt={'altimage'} width={40} height={40} />
  //   );
  // }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Img = ({ url }:any)=> {
    return (
      <Image src={`${url}`} alt={'altimage'} width={40} height={40} />
    );
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
        <div className="h-[7rem]">
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
        <div className='flex'>
          <p className='text-3xl'>{upvoteCount}</p>
          <button onClick={handleClick}><Img url={isUpvoted ? '/upvoteFilled.png' : '/upvote.png'} toggleUpvote={toggleUpvote}/></button>
        </div>
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
