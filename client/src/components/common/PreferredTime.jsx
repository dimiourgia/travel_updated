import clock_icon  from "../../assets/clock.svg";
import { useState, useEffect, useRef } from "react";
import {motion} from 'framer-motion'

export default function ({onChange}){
    console.log('rendering preferredTime...')
    const [showDropdown, setShowDropdown] = useState(false)
    const [coordinates, setCoordinates] = useState({x:null, y:null});

    const [preferredTime, setPreferredTime] = useState('9am - 12pm');

    const spitSource = (type)=>{
        switch(type){
            case '6am - 9am' : return clock_icon;
            case '9am - 12pm' : return clock_icon;
            case '12pm - 3pm' : return clock_icon; 
            case '3pm - 6pm' : return clock_icon;
            case '6pm - 9pm' : return clock_icon;
            case '9pm - 12am' : return clock_icon;
            case '12am - 3am' : return clock_icon;
            case '3am - 6am' : return clock_icon;
        }
    }

    const dropdownRef = useRef(null);
    const dropdownParentRef = useRef(null);

    const handleDropdown = (e)=>{
        const parentBounderies =  dropdownParentRef.current.getBoundingClientRect();
        setShowDropdown(pre=>!pre)
        console.log(parentBounderies, {x:parentBounderies.x, y:parentBounderies.y})
        setCoordinates({x:parentBounderies.x, y:parentBounderies.y-70+window.scrollY})
    }

    useEffect(() => {
        const handleClick = (event) => {
          event.stopPropagation()
          if (dropdownRef.current && dropdownParentRef.current && !dropdownParentRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
              setShowDropdown(false)
          }
        };

        const handleScroll = (event)=>{
            event.stopPropagation()
            if (dropdownRef.current && dropdownParentRef.current && !dropdownParentRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
              }
        }

        if(showDropdown){
            document.addEventListener("click", handleClick)
            document.addEventListener("scroll", handleScroll);
        }

        
  
        return () => {
          document.removeEventListener("click", handleClick)
          document.removeEventListener('scroll', handleScroll)
        }
  
      }, [showDropdown]);


    const timings = ['6am - 9am', '9am - 12pm', '12pm - 3pm', '3pm - 6pm', '6pm - 9pm', '9pm - 12am', '12am - 3am', '3am - 6am'];

    const onPreferredTimeChange = (preferredTime)=>{
        setPreferredTime(preferredTime)
        onChange(preferredTime)
    }

    const list = { 
        hidden:{width: "50px", maxHeight:'50px', opacity:.8}, 
        visible:{
            width: '154px', 
            maxHeight: '350px',
            opacity:1, 
            transition:{when: 'beforeChildren', ease: 'linear', duration:.05}
        }};

    const listItem = {hidden: {opacity:0}, visible:{opacity:1, duration:.01}}

    return(

        <div ref={dropdownParentRef} className="relative h-[45px] py-2 rounded border border-md border-neutral-300 items-center justify-center flex hover:cursor-pointer" onClick={(e)=>handleDropdown(e)}>

            <div className="pl-6 w-[152px] h-[45px] flex items-center gap-2" >
                <img src={spitSource(preferredTime)} className="w-4 h-4"/>
                <p className="font-cabin text-neutral-700 text-md">{preferredTime}</p>
            </div>

            {showDropdown && 
            <motion.div 
                initial='hidden' 
                animate='visible' 
                variants={list} 
                ref={dropdownRef} 
                style={{top: `${coordinates.y}px` , left: `${coordinates.x-230}px`}} 
                className="fixed flex flex-col w-[174px] bg-white rounded shadow-xl border border-md border-neutral-300 z-[101]">
                
                {timings.map((preferredTime,index)=>(
                    <motion.div variants={listItem}  key={index} className="w-full pl-6 z-[100] h-[45px] flex items-center py-2 gap-2 hover:bg-slate-100 hover:scale-1.5" onClick={()=>onPreferredTimeChange(preferredTime)}>
                        <img src={spitSource(preferredTime)} className="w-4 h-4"/>
                        <p className="font-cabin text-neutral-700 text-md">{preferredTime}</p>
                    </motion.div>
                ))}

            </motion.div>}

        </div>
    )
}