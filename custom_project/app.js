const descEl = document.getElementById('desc')
const imgBox = document.getElementById('image_box')
const imgEl = document.getElementsByTagName('img')[0]
const btn = document.getElementById('btn')

console.log(imgEl);

const myArray = [
  "amazing",
  "awesome",
  "fun",
  "funny",
  "thoughtful",
  "nice",
  "playful",
  "helpful",
  "caring",
  "loving",
  "respectful",
  "great"
]


const myColors = [
  'red',
  'blue',
  'green',
  'purple',
  'teal',
  'pink',
  'brown',
  'turqoise'
]

const imgArr = [
  'pic1.JPG',
  'pic2.JPG',
  'pic3.JPG',
  'pic4.JPG',
  'pic5.jpeg',
  'pic6.JPG',
  'pic7.JPG',
  'pic8.JPG',
  'pic9.JPG',
  'pic10.JPG',
  'pic11.JPG'
]


btn.addEventListener('click', () => {
  descEl.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
  descEl.style.color = myColors[Math.floor(Math.random() * myColors.length)]
  imgEl.src = './img/' + imgArr[Math.floor(Math.random() * imgArr.length)];

})

