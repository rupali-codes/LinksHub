import { FC, useState, useRef, useEffect } from 'react'
import { BsYoutube, BsPen } from 'react-icons/bs'
import { AiOutlineRead } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { CopyToClipboard } from 'components/CopyToClipboard/CopyToClipboard'
import type { IData } from 'types'
import Bookmark from 'components/Bookmark/Bookmark'
import { db } from '../../lib/firebase-config'
import {
  Timestamp,
  collection,
  doc,
  where,
  query,
  getDocs,
  setDoc,
  getDoc,
} from 'firebase/firestore'
import Image from 'next/image'

interface CardProps {
  data: IData
  onClick: () => void
}

export const Card: FC<CardProps> = ({ data, onClick }) => {
  const { name, description, url, subcategory } = data
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
  const id = data.url.replace(/[^\w\s]/gi, '')

  const [upvoteCount, setUpvoteCount] = useState(0)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const timestamp = Timestamp.fromDate(new Date())
  const date = timestamp.toDate()
  const user = {
    name: 'Vidip',
    uid: 1234,
  }

  const docRef = doc(db, 'resources', id)
  const save = async () => {
    await setDoc(
      docRef,
      {
        name: name,
      },
      { merge: true }
    )
  }

  const addUserToAssetBookmark = async () => {
    try {
      const subcollectionRef = collection(db, 'resources')
      const assetQuery = query(subcollectionRef, where('name', '==', data.name))
      const assetQuerySnapshot = await getDocs(assetQuery)
      console.log('Asset Query: ', assetQuery)
      console.log('Asset Query Snapshot: ', assetQuerySnapshot)
      if (assetQuerySnapshot.empty) {
        console.log('Asset not found')
        return
      }

      const assetDocSnapshot = assetQuerySnapshot.docs[0]
      const assetDocRef = doc(db, 'resources', data.name)
      const assetData = assetDocSnapshot.data()
      console.log('Asset Data: ', assetData)

      const upvotes = assetData.upvotes || {}
      const userUid = user.uid

      if (upvotes[userUid]) {
        // User has already upvoted, so remove their upvote
        delete upvotes[userUid]
      } else {
        // User has not upvoted, so add their upvote
        upvotes[userUid] = true
      }
      await setDoc(assetDocRef, {
        name: name,
        description: description,
        url: url,
        upvotedBy: user,
        created: date, // Keep existing data
        upvotes: upvotes,
      })

      const updatedAssetDoc = await getDoc(assetDocRef)
      if (!updatedAssetDoc.exists()) {
        console.log('Asset document not found')
        return
      }
      const updatedUpvotes = updatedAssetDoc.data().upvotes || {}
      const upvoteCount = Object.keys(updatedUpvotes).length
      setUpvoteCount(upvoteCount)
      console.log(upvoteCount)
    } catch (error) {
      console.error('Error adding user to asset upvotes:', error)
    }
  }

  const toggleUpvote = () => {
    setIsUpvoted((p) => !p)
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    toggleUpvote()
    save()
    await addUserToAssetBookmark()
  }

  const Img = ({ url }: any) => {
    return <Image src={`${url}`} alt={'altimage'} width={40} height={40} />
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
    <article className="z-10 h-full w-full rounded-3xl dark:bg-slate-800 dark:text-text-primary dark:shadow-sm bg-light-white">
      <div className="card-body">
        <header className="flex justify-between items-center gap-2">
          <h2
            className="cursor-default md:truncate ... text-lg md:text-xl dark:text-light-primary"
            title={name}
          >
            {name}
          </h2>
          <div className="flex items-center gap-1">
            <Bookmark />
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
            <span
              onClick={onClick}
              className="text-sm float-right hover:underline dark:hover:text-theme-primary text-right hover:text-theme-primary dark:text-text-primary"
            >
              ...Read More
            </span>
          )}
        </div>
        <div className="flex justify-evenly">
          <button onClick={handleClick}>
            <Img
              url={isUpvoted ? '/upvoteFilled.png' : '/upvote.png'}
              toggleUpvote={toggleUpvote}
            />
          </button>
          <p className="text-3xl">{upvoteCount}</p>
        </div>
        <footer className="grid grid-cols-2 gap-x-4 md:grid-cols-1 lg:grid-cols-2">
          <CopyToClipboard url={url} />
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'mt-2 flex w-full items-center justify-center gap-2 rounded-lg  bg-theme-secondary px-3 py-2 text-center text-light-primary duration-100'
            }
          >
            <span className="truncate ...">Visit site</span>
            {youtubeRegex.test(url) ? (
              <BsYoutube size="1.3em" />
            ) : subcategory === 'e_book' ? (
              <AiOutlineRead size="1.3em" />
            ) : subcategory === 'technical_writing_tools' ? (
              <BsPen size="1.2em" />
            ) : (
              <HiOutlineExternalLink size="1.3em" />
            )}
          </a>
        </footer>
      </div>
    </article>
  )
}
