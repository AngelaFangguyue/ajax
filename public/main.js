getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "1.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let style = document.createElement("style");
        style.textContent = request.response;
        document.head.appendChild(style);
      } else {
        console.log("虽然请求成功了，但未能成功下载。");
      }
    }
  };
  request.send();
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        alert(request.response);
      } else {
        console.log("虽然请求成功了，但未能成功下载。");
      }
    }
  };
  request.send();
};

getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let div = document.createElement("div");
        div.innerHTML = request.response;
        //  div.style.border = "5px solid red";
        document.body.appendChild(div);
      } else {
        console.log("虽然请求成功了，但未能成功下载。");
      }
    }
  };
  request.send();
};

getXml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        mySpan.textContent = request.responseXML.getElementsByTagName(
          "warning"
        )[0].textContent;
        //  div.style.border = "5px solid red";
        //document.body.appendChild(div);
      } else {
        console.log("虽然请求成功了，但未能成功下载。");
      }
    }
  };
  request.send();
};

getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        mySpan1.textContent = JSON.parse(request.response).name;
        //  div.style.border = "5px solid red";
        //document.body.appendChild(div);
      } else {
        console.log("虽然请求成功了，但未能成功下载。");
      }
    }
  };
  request.send();
};

let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let arr = JSON.parse(request.response);
        //console.log(arr);
        arr.forEach(ele => {
          let li = document.createElement("li");
          li.textContent = ele.id;
          xxx.appendChild(li);
        });
        n = n + 1;
        //  div.style.border = "5px solid red";
        //document.body.appendChild(div);
      } else {
        console.log("虽然请求成功了，但未能成功下载。");
      }
    }
  };
  request.send();
};
