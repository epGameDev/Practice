const usernameElem = document.getElementById("username");
const passwordElem = document.getElementById("password");
const feedElem = document.querySelector(".feed");

const database = [
   {
      username: "Eric",
      password: "bingo232",
   },
   {
      username: "Jeff",
      password: "777",
   },
   {
      username: "Tom",
      password: "lollipop",
   },
   {
      username: "Branden",
      password: "grrrrr",
   },
];

const newsFeed = [
   {
      username: "Kyle",
      timeline: "Love it over here in Cali. Good thing I left Texas.",
   },
   {
      username: "Branden",
      timeline: `Kyle, you're a dick.`,
   },
   {
      username: "Stacy",
      timeline: "Cant we just all get along!",
   },
   {
      username: "Alyssa",
      timeline: "Shut the hell up Stacy! She doesn't even go here!",
   },
   {
      username: "Amy",
      timeline: `All ya'll need to shut up. Im trying to sleep...`,
   },
   {
      username: "Ohcacia",
      timeline: "I'm going to effing kill you Amy Lynn! Shut your damn phone off!.😒",
   },
   {
      username: "Amy",
      timeline: `Damn, tough crowd. ......you guys still suck.`,
   },
];

const checkCredentials = () => {
   for (const user in database) {
      if (
         database[user].username === usernameElem.value &&
         database[user].password === passwordElem.value
      ) {
         return newsFeed.forEach((post) => {
            feedElem.innerHTML += `<li class=post> ${post.username} -- "${post.timeline}" </li>`;
         });
      }
   }

   alert("Wrong Credentials");
};

passwordElem.addEventListener("keypress", function (event) {
   if (event.key === "Enter") {
      return checkCredentials();
   }
   return;
});
