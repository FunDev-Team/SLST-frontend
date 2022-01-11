

function ButtonLeaf(props: { title: any; }) {
    console.log(props.title);
    
    return (
        <div className='px-16 shadow min-h-min leading-[50px] text-lg
                        text-white font-semibold bg-cyan-500 max-w-sm rounded-tl-2xl rounded-br-2xl animate-bounce
                        hover:cursor-pointer hover:bg-cyan-300 hover:shadow-lg hover:text-blue-800 hover:animate-none'>
            {props.title}
        </div>
    );
}

export default ButtonLeaf