(
    function(){

        // 작은 컴포넌트 만들기
        // 1.ProPic
        function ProPic({color}){
            return(
                <img src={`./images/${color}.jpg`} alt={color} />
            )
        }
        // 2.ProColor
        function ProColor({size,sizes,color,colors,changeColor}){
            // const color = window.data.allColor;
            // console.log(color)
            function optionColor(){
                return colors.map(
                    (item,index) => (<option value={item} key={index}> {item} </option>)
                    )
            }
            function colorChange(e){
                // console.log(e.target.value)
                changeColor(e.target.value)
            }
            return(
                <p>
                    <label htmlFor='color'>color</label>
                    <select id='color' defaultvalue={color} onChange={colorChange}>
                        {optionColor()}
                    </select>
                </p>
            )
        }
        // 3.ProSize
        function ProSize({size,sizes,color,colors,changeSize}){
            // const sizes = window.data.allSize;
            // console.log(sizes)
            function optionSize(){
                return sizes.map(
                    (item,index) => (<option value={item} key={index}> {item} </option>)
                )
            }
            function sizeChange(e){
                // console.log(e.target.value)
                changeSize(e.target.value)
            }
            return(
                <p>
                    <label htmlFor='size'>size</label>
                    <select id='size' defaultvalue={size} onChange={sizeChange}>
                       {optionSize()}
                    </select>
                </p>      
            )
        }
        
        // app
        function App(){
            const [size,setSize] = React.useState(7);
            const [sizes,setSizes] = React.useState(window.data.allSize);
            const [color,setColor] = React.useState('green');
            const [colors,setColors] = React.useState(window.data.allColor);
            // console.log(size,sizes,color,colors);
        
           // change 함수만들기
           function changeColor(num){
                const ableSize = window.data.byColor[num]
                // console.log(ableSize)
                setColor(num)
                setSizes(ableSize)
           }   
           function changeSize(str){
                const ableColor = window.data.bySize[str]
                // console.log(ableColor)
                setSize(str)
                setColors(ableColor)
           }   

            return (
                <div className="custom">
                    <div className='pic'>
                      <ProPic color={color}/>
                    </div>
                    <div className='selector'>
                      <ProColor size={size}
                                sizes={sizes}
                                color={color}
                                colors={colors}
                                changeColor={changeColor}/>
                      <ProSize size={size}
                               sizes={sizes}
                               color={color}
                               colors={colors}
                               changeSize={changeSize}/>
                    </div>
                </div>
            )
        }

        // export
        const root = ReactDOM.createRoot(document.querySelector('#root'))
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )
    }
)()