const $content = document.querySelector('.content')
const $clock = document.querySelector('.clock')
const $time = $clock.querySelector('.time')

// gradient
var granimInstance = new Granim
({
    element: '#canvas-basic',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : 
    {
        "default-state": 
        {
            gradients: 
            [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
})


function updateTime() {
    const date = new Date()

// returns the local hour at this date
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

// two numbers to defined the time
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

// affich text with javascript
    $time.innerText=`${hour} : ${minute} : ${second}`
}


// call the function every 1000ms = 1sec
setInterval(updateTime, 1000)


