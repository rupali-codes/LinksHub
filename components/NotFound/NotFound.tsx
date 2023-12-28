import { FC } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from 'components/Button';
import Search from "assets/icons/svg/search-icon.svg"

const NotFound: FC = () => {
  return (
    <div className="pt-6 md:p-0 text-xl w-full my-auto h-[calc(100vh-450px)] md:h-[calc(100vh-270px)]">
      <h1 className='text-[32px] font-[600] dark:bg-text-light-silver mb-[8px]'>Resources</h1>
      <span className='text-[16px] md:text-[18px]'>We&apos;ve curated a wealth of resources just for you. Go ahead and explore at your own pace.</span>

      <div className='flex flex-col justify-center items-center gap-3 h-full'>
        <Search />
        <span className='text-center text-[16px] md:text-[18px]'>
          Couldn&apos;t find what you&apos;re looking for? Feel free to seek <br className='hidden md:block' />
          assistance in our Discord community.
        </span>
          <Button
            label='Join Discord'
            icon={<IoIosArrowRoundForward size={24} />}
            variant='primary'
            className='p-0 flex-row-reverse text-[16px]'
            link='https://discord.com/invite/NvK67YnJX5'
          />
      </div>
    </div>
  )
}

export default NotFound
