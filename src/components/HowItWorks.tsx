import { useState } from "react"

export default function HowItWorks() {
    const [state, setState] = useState<number>(0)

    return (
        <div className="w-screen h-screen bg-[#D7C6AA]">
            <div className="text-black w-full h-[25%] flex flex-col justify-evenly items-center">
                <div className="font-bold text-6xl">
                    How it Works?
                </div>
                <div className="text-2xl flex flex-col items-center">
                    <div>
                        Revolutionize the way you work and enhance your efficiency. With our MVP
                    </div>
                    <div>
                        features, experience a whole new level of productivity like never before!
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-white">
                <div className="w-[90%] h-[65vh] bg-[#2C3427] rounded-xl shadow-[0_0_100px_rgba(44,52,39,0.6)] overflow-hidden">
                    <div className={`w-[300%] h-[55vh] flex ${(state != 0) ? ((state == 1) ? '-translate-x-[33.3%]' : '-translate-x-[66.6%]') : ''} duration-[1000ms]`}>
                        <div className={`h-full w-full flex`}>
                            <div className="w-[40%] h-full bg-[url('/HiW1.png')] bg-contain bg-no-repeat bg-center">
                                
                            </div>
                            <div className="w-[60%] h-full flex flex-col items-end px-[4vw]">
                                <div className="text-4xl font-bold my-[3vw] text-right">
                                    Track and cultivate your positive habits with ease!
                                </div>
                                <div className="text-2xl text-right">
                                    Our cutting-edge habit tracker feature simplifies the process of monitoring and nurturing positive habits. With seamless tracking of your daily, weekly, or monthly routines, you can effortlessly maintain commitment and consistency. Visual representations provide a clear view of your progress, empowering you to stay motivated and accountable throughout your journey of personal growth and success.
                                </div>
                            </div>
                        </div>
                        <div className={`h-full w-full flex`}>
                            <div className="w-[40%] h-full bg-[url('/HiW2.png')] bg-contain bg-no-repeat bg-center">
                                
                            </div>
                            <div className="w-[60%] h-full flex flex-col items-end px-[4vw]">
                                <div className="text-4xl font-bold my-[3vw] text-right">
                                    Take control of your goals!
                                </div>
                                <div className="text-2xl text-right">
                                    Take control of your aspirations with our app's goal-setting feature. Define clear objectives and milestones for each habit you want to develop. Set specific targets, track your progress, and celebrate your achievements along the way. With our goal-setting feature, you'll have a roadmap to success, making your journey more structured and rewarding.
                                </div>
                            </div>
                        </div>
                        <div className={`h-full w-full flex`}>
                            <div className="w-[40%] h-full bg-[url('/HiW3.png')] bg-contain bg-no-repeat bg-center">
                                
                            </div>
                            <div className="w-[60%] h-full flex flex-col items-end px-[4vw]">
                                <div className="text-4xl font-bold my-[3vw] text-right">
                                    Personal AI for Action Recommendation
                                </div>
                                <div className="text-2xl text-right">
                                    Experience the power of personalized guidance with our app's Personal AI for Action Recommendation. Habitude's AI understands your habits, preferences, and patterns to offer tailored suggestions and recommendations.Optimize your habits and achieve your goals with intelligent insights and personalized strategies for increased productivity.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[10vh] flex justify-between text-3xl font-bold items-center border-t-2 border-[#D7C6AA] px-[3vw]">
                        <div className={`${(state == 0) ? 'bg-[#D7C6AA]' : ''} p-[1vh] rounded-lg ${(state == 0) ? 'text-[#2C3427]' : 'text-[#747474]'} hover:cursor-pointer`} onClick={() => setState(0)}>
                            Habit Tracker
                        </div>
                        <div className={`${(state == 1) ? 'bg-[#D7C6AA]' : ''} p-[1vh] rounded-lg ${(state == 1) ? 'text-[#2C3427]' : 'text-[#747474]'} hover:cursor-pointer`} onClick={() => setState(1)}>
                            Goal Setting
                        </div>
                        <div className={`${(state == 2) ? 'bg-[#D7C6AA]' : ''} p-[1vh] rounded-lg ${(state == 2) ? 'text-[#2C3427]' : 'text-[#747474]'} hover:cursor-pointer`} onClick={() => setState(2)}>
                            Personalized AI
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}