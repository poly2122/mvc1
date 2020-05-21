import './app1.css'
import $ from 'jquery'



// 获取4个button
const $button1=$('#add1')
const $button2=$('#minus1')
const $button3=$('#mul2')
const $button4=$('#divide2')
const $number=$('#number')
// 初始化n
const n=localStorage.getItem("n")
// 没有n就等于100
$number.text(n || 100)



// 绑定事件 +1
$button1.on('click',()=>{
let n= parseInt( $number.text())
 n+=1;
 localStorage.setItem('n',n)
 $number.text(n)
})
// -1
$button2.on('click',()=>{
    let n=parseInt($number.text())
    n -=1
 localStorage.setItem('n',n)
    $number.text(n)
})
$button3.on('click',()=>{
    let n=parseInt($number.text())
    n *=2
 localStorage.setItem('n',n)
    $number.text(n)
})
$button4.on('click',()=>{
    let n=parseInt($number.text())
    n /=2
 localStorage.setItem('n',n)
    $number.text(n)
})