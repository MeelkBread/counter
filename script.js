let count = 0

document.getElementById('btnStart').onclick = function(){

    let intervalID = setInterval(myCallback, 1000)

    function myCallback(){
        count++
        document.getElementById('counter').innerHTML = count
    }

    document.getElementById('btnStop').onclick = function(){
        clearInterval(intervalID)
    }

    document.getElementById('btnReset').onclick = function(){
        clearInterval(intervalID)
        count = 0
        document.getElementById('counter').innerHTML = 0
        
    }

}