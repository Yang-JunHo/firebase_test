const firebaseConfig = {
    apiKey: "AIzaSyAVUsFO2k8LQYVMH_NuPccgo-qePqMaR9A",
    authDomain: "project-jh-ecd9f.firebaseapp.com",
    databaseURL: "https://project-jh-ecd9f-default-rtdb.firebaseio.com",
    projectId: "project-jh-ecd9f",
    storageBucket: "project-jh-ecd9f.appspot.com",
    messagingSenderId: "369368751089",
    appId: "1:369368751089:web:e81dff2aacab8c713dc250",
    measurementId: "G-KPGTGTNJ46"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {
    database.ref("users/" + userId).set({
        email: email,
        nick: nick
    });
}


function readUserData() {
    database.ref("users/").on('value', (snapshot) => {
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data)

        console.log(Object.keys(data));
        console.log(data["yjy682"]);
        console.log(data[keys[0]]);


        const result = document.getElementById("result");

        // 데이터베이스 웹 페이지 출력
        // result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`

        // ----------------------------------------------------------------------------------------------------------------------------

        // 데이터 읽기 실습
        // 1. 전체 조회된 결과 출력
        //  - 테이블 태그 or 목록 태그를 활용해서 출력

        // [첫번째 풀이]
        // for (let i = 0; i < keys.length; i++) {
        //     result.innerText += `이메일: ${data[keys[i]].email} / 닉네임: ${data[keys[i]].nick}\n`;
        // }

        // [두번째 풀이_테이블형식]
        // for (let i = 0; i < keys.length; i++) {
        //     result.innerHTML += `
        //         <table border="1">
        //             <tr>
        //                <td>이메일 </td>
        //                <td>${data[keys[i]].email}</td>
        //             </tr>
        //             <tr>
        //                 <td>닉네임 </td>
        //                 <td>${data[keys[i]].nick}</td>
        //             </tr>`;
        // }
        // result.innerHTML += "</table>";

        // [세번째 풀이_테이블형식_th태그 포함]

        let resultHTML = "<table border = '1'> <tr><th>이메일</th><th>닉네임</th></tr>";

        for (let i = 0; i < keys.length; i++) {
            resultHTML += `
                <tr>
                    <td>${data[keys[i]].email}</td>
                    <td>${data[keys[i]].nick}</td>
                </tr>`;
        }
        resultHTML += "</table>";
        result.innerHTML = resultHTML

        // ----------------------------------------------------------------------------------------------------------------------------

        // 2. 특정 사용자 조회
        //  - id값 입력받은 후 해당 사용자의 email, nick 출력

        // [첫번째 풀이]
        // for (let i = 0; i < keys.length; i++) {
        //     if (readId.value === keys[i]) {
        //         result.innerText = `이메일: ${data[keys[i]].email} / 닉네임: ${data[keys[i]].nick}`;
        //     }
        // }

        // [두번째 풀이_테이블형식]
        // for (let i = 0; i < keys.length; i++) {
        //     if (readId.value === keys[i]) {
        //         result.innerHTML = `
        //         <table border="1">
        //             <tr>
        //                 <td>이메일 </td>
        //                 <td>${data[keys[i]].email}</td>
        //             </tr>
        //             <tr>
        //                 <td>닉네임 </td>
        //                 <td>${data[keys[i]].nick}</td>
        //             </tr>
        //         </table>`;
        //     }
        // }
        // result.innerHTML += "</table>";

        // [세번째 풀이_테이블형식_th태그 포함]
        // let resultHTML = "<table border = '1'> <tr><th>이메일</th><th>닉네임</th></tr>";

        // for (let i = 0; i < keys.length; i++) {
        //     if (readId.value === keys[i]) {
        //         resultHTML += `
        //         <tr>
        //             <td>${data[keys[i]].email}</td>
        //             <td>${data[keys[i]].nick}</td>
        //         </tr>`;
        //     }
        // }
        // resultHTML += "</table>";
        // result.innerHTML = resultHTML
    });
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let btn = document.frm.btn;
let readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", () => {

    readUserData();
});

btn.addEventListener("click", (event) => {
    event.preventDefault();

    const id = document.frm.id.value
    const email = document.frm.email.value
    const nick = document.frm.nick.value

    console.log(id);
    console.log(email);
    console.log(nick);

    writeUserData(id, email, nick);
})

