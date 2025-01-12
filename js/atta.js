
        // console.log(bookmarkURL.value);
        // console.log( prodectcontant.push(bookmarkURL.value));
        // console.log((prodectcontant.push(prodect.bookmarkU)));
        // console.log( prodectcontant.push(prodect));
        // let globalIndex=0;


let bookmarkName = document.getElementById("bookmarkName");
let bookmarkURL = document.getElementById("bookmarkURL");
let submitBtn = document.getElementById("submitBtn");
let tableContent = document.getElementById("tableContent");


var prodectcontant=[];

if(localStorage.getItem("allmin") !== null){
    var prodectcontant = JSON.parse(localStorage.getItem("allmin"));
    showdata();
}





const pattern = new RegExp(
    // /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    /\b(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?\b/
);
const patternnumber = new RegExp(
    /^[a-z0-9_-]{3,15}$/
    // /^[a-z0-g]{3,15}/
);




bookmarkName.addEventListener('input', () => {
    const value = bookmarkName.value;

if (value.length < 3) {
    bookmarkName.classList.add('is-invalid');
} else {
    bookmarkName.classList.remove('is-invalid');
        bookmarkName.classList.add('is-valid');
    }
});



bookmarkURL.addEventListener('input', () => {
if (pattern.test(bookmarkURL.value)) {
            bookmarkURL.classList.add('is-valid');
} else {
    bookmarkURL.classList.remove('is-valid');
    bookmarkURL.classList.add('is-invalid');
    }
});








function add() {

if (patternnumber.test(bookmarkName.value) && pattern.test(bookmarkURL.value))  {

            let prodect = {
                bookmarkN:bookmarkName.value,
                bookmarkU:bookmarkURL.value
            }
        prodectcontant.push(prodect);
        console.log(prodectcontant);
        
        localStorage.setItem('allmin', JSON.stringify(prodectcontant));

            showdata();
            clear();

            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                text: "success",
            });

        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Site name must contain at least 3 characters and Site URL must be a valid one",
            });
        }
    }



function showdata() {
    let str='';
    for (let i = 0; i < prodectcontant.length; i++) {
str+=`
                <tr>
                    <td>${[i+1]}</td>
                    <td>${prodectcontant[i].bookmarkN}</td>
                    <td>
                    <button class="btn btn-visit">
                        <a href="${prodectcontant[i].bookmarkU}" target="_blank">Visit</a>
                    </button>
                    </td>
                    <td>
                    <button onclick="delet(${i});" class="btn btn-delete pe-2">
                        <i class="fa-solid fa-trash-can"></i>
                        Delete
                    </button>
                    </td>
                </tr>
`;
    }


    tableContent.innerHTML = str;
}
function delet (index) {
    prodectcontant.splice(index,1);
    showdata();
    localStorage.setItem('allmin', JSON.stringify(prodectcontant));

}
function clear() {
    bookmarkName.value=null;
    bookmarkURL.value=null;
    }




// console.log(bookmarkURL.value);
// console.log(pattern.test(bookmarkURL.value));
// console.log(pattern.test("https://www.example.com"));
// console.log(pattern.test(bookmarkURL.value));

