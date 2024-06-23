  import T1 from "../assets/t1.png"
  import T2 from "../assets/t2.png"
  import T3 from "../assets/t3.png"
  import T4 from "../assets/t4.png"



 export default function Skills() {
   return (
    <>
    <hr />
    <div name="Skills">
    <h1 className="text-3xl font-bold mb-5 ml-20 mt-20">Skills</h1>

    </div>
     <div   className="lg:flex ssm:grid bg-slate-200 m-20 ssm:flex-col lg:flex-row">
       <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ml-10">
         <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl
         flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
         <img src={T1} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
         <div className="min-w-0 py-5 pl-28 pr-5">
          <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">HTML</div>
          <div className=" text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Structuring</div>
         </div>
         </div>
       </div>
       <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ml-10">
         <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl
         flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
         <img src={T2} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
         <div className="min-w-0 py-5 pl-28 pr-5">
          <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">CSS</div>
          <div className=" text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Styling</div>
         </div>
         </div>
       </div>
       <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ml-10 ">
         <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl
         flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
         <img src={T3} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
         <div className="min-w-0 py-5 pl-28 pr-5">
          <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200 ">JS</div>
          <div className=" text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Logic</div>
         </div>
         </div>
       </div>
       <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse ml-10">
         <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl
         flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
         <img src={T4} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
         <div className="min-w-0 py-5 pl-28 pr-5">
          <div className="text-slate-900 font-medium   text-sm sm:text-base truncate dark:text-slate-200 ">React</div>
          <div className=" text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">JS'Library</div>
         </div>
         </div>
       </div>
 
 
       
     </div>
     </>
   )
 }
 