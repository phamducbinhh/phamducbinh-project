//viết 1 fucntion tạo ra thông báo
// function createNoti(title = "Welcome to Notification") {
//   const template = `    <div class="noti">
//         <img src="https://source.unsplash.com/random" alt="" class="noti_image">
//         <div class="noti-content">
//             <h3 class="noti-title">${title}</h3>
//             <p class="noti-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quisquam deserunt voluptate quo dolores dignissimos.</p>
//         </div>
//     </div>
// `;
//   const body = document.querySelector("body");
//   body.insertAdjacentHTML("afterbegin", template);
// }

// const randomData = [
//   "Đức Bình Mobile",
//   "Iphone 13",
//   "SamSung Galaxy s20",
//   "Macbook Pro",
//   "Asus,Dell,HP",
// ];

// let lastTitle;
// const timer = setInterval(function () {
//   const item = document.querySelector(".noti");
//   if (item) item.parentNode.removeChild(item);
//   const title = randomData[Math.floor(Math.random() * randomData.length)];
//   if (lastTitle !== title) {
//     createNoti(title);
//   }
//   lastTitle = title;
// }, 6000);
