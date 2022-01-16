
export interface IProps {
    isOpen: boolean;
    exitDimmer: (action: boolean) => void;
    zIndex?: number;
    opacity?: number;
    blur?: number;
    saturate?: number;
    transition?: number;
}

export const BackgroundModal = ({ isOpen, exitDimmer, zIndex = 100, opacity = 0.5, blur = 0,
    saturate = 100, transition = 0.3 }: IProps) => {
        
    const defaultStyle = {
        zIndex: zIndex.toString(), background: 'rgba(0, 0, 0, 0)',
        backdropFilter: `blur(0px) saturate(100%)`, transition: `${transition}s`
    };
    const activeStyle = {
        zIndex: zIndex.toString(), background: `rgba(0, 0, 0, ${opacity})`,
        backdropFilter: `blur(${blur}px) saturate(${saturate}%)`, transition: `${transition}s`
    };

    return (
        <div
            className={`w-full h-full  ${isOpen ? 'fixed top-0 left-0 ' : ''}`}
            style={isOpen ? activeStyle : defaultStyle}

        ></div>
    );
};