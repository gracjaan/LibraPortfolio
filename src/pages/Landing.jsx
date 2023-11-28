import React from 'react'
import Header from '../components/Header'

const Landing = () => {
    return (
        <section class="pt-20 h-screen max-h-[100vh] flex flex-col">
            {/* <div class="absolute top-20 left-0 right-0 z-[9999]"> */}
                <div class="h-5 w-5 bg-black rounded-full ml-[-10px] mt-[-10px]"></div>
                <div class="border-t border-black w-[300px] mt-[-10px]"></div>
                <div class="flex flex-col w-full overflow-hidden">
                    <div class="flex flex-row grow gap-10 mt-10 mx-10">
                        <div class="basis-full">
                            <h1 class="text-4xl font-bold text-black">Beata Andryk - CEO</h1>
                            <h2 class="text-xl font-thin text-black mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis dui a sem aliquam venenatis. Morbi eu ligula luctus, egestas velit nec, tempor purus. Donec dictum tellus sed metus semper,</h2>
                        </div>
                        <div class="basis-full">
                            <img src="https://via.placeholder.com/600x400" alt="placeholder" />
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <div class="absolute bottom-0 left-0 right-0 z-[9998] bg-red-100 h-20"></div>
        </section>
    )
}

export default Landing