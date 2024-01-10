import { FC } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from 'components/Button';
import Search from "assets/icons/svg/search-icon.svg"

const NotFound: FC = () => {
  return (
    <div className="pt-6 md:p-0 text-xl w-full min-h-[calc(100%-450px)] md:min-h-[calc(100%-270px)] h-full">
      <h1 className='text-[32px] font-[600] dark:bg-text-light-silver mb-[8px]'>Resources</h1>
      <span className='text-[16px] md:text-[18px]'>We&apos;ve curated a wealth of resources just for you. Go ahead and explore at your own pace.</span>

      <div className='flex items-center justify-center h-[calc(100%-70px)] md:h-[calc(100%-60px)]'>
        <div className='flex flex-col justify-center items-center gap-3 lg:gap-5 py-3'>
          <Search className="w-[20%] my-1" />
          <span className='text-center text-[16px] md:text-[18px]'>
            Couldn&apos;t find what you&apos;re looking for? Feel free to seek <br className='hidden md:block' />
            assistance in our Discord community.
          </span>
          <Button
            label='Join Discord'
            icon={<IoIosArrowRoundForward size={24} />}
            variant='primary'
            className='flex-row-reverse text-[16px] py-2'
            link='https://discord.com/invite/NvK67YnJX5'
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
