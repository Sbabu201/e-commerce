import React from 'react'
import AllItem from './cards/AllItem'


const AllProduct = () => {
    const arr = [1, 2, 3, 4, 5, 3, 4, 5, 4, 3, 4, 5, 6, 5, 4, 3, 4, 5, 4, 3, , 2, 2, 2, 3, 4, 5, 6, 3, 3, 3]
    return (
        <div className='mt-20'>

            <div className='flex w-full  h-full justify-between  '>
                <div className='h-fit w-1/5 flex flex-col  border border-gray-200  '>
                    <div className='p-10 flex flex-col gap-4 my-4  '>
                        <p>FILTER</p>
                        <form className='flex gap-4 flex-col'>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="male" checked={true} />
                                    Option 1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="female" />
                                    Option 2
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className='p-10 flex flex-col gap-4 my-4 border border-gray-200 '>
                        <p>BRAND</p>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand1" id="" />
                            brand-1
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand2" id="" />
                            brand-2
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand3" id="" />
                            brand-3
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand4" id="" />
                            brand-4
                        </div>
                    </div>
                    <div className='p-10 flex flex-col gap-4 my-4  '>
                        <p>PRICE</p>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand1" id="" />
                            brand-1
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand2" id="" />
                            brand-2
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand3" id="" />
                            brand-3
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand4" id="" />
                            brand-4
                        </div>
                    </div>
                    <div className='p-10 flex flex-col gap-4 my-4 border border-t-gray-200 '>
                        <p>COLOUR</p>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand1" id="" />
                            brand-1
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand2" id="" />
                            brand-2
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand3" id="" />
                            brand-3
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand4" id="" />
                            brand-4
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand4" id="" />
                            brand-4
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand4" id="" />
                            brand-4
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand4" id="" />
                            brand-4
                        </div>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="brand4" id="" />
                            brand-4
                        </div>
                    </div>
                </div>
                <div className=' w-4/5 h-full flex justify-center  gap-2 md:gap-4 md:justify-evenly md:w-full   md:p-12  flex-wrap'>

                    {arr.map((item) => (<AllItem />))}
                </div>
            </div>

        </div>
    )
}

export default AllProduct