// Callbacks
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

// promises
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// prmoise with then/catch
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("IT WORKED!!!!!! (page1)");
    fakeRequestPromise("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("IT WORKED!!!!!! (page2)");
        fakeRequestPromise("yelp.com/api/coffee/page3")
          .then(() => {
            console.log("IT WORKED!!!!!! (page3)");
          })
          .catch(() => {
            console.log("OH NO, ERROR!!! (page3)");
          });
      })
      .catch(() => {
        console.log("OH NO, ERROR!!! (page2)");
      });
  })
  .catch(() => {
    console.log("OH NO, ERROR!!! (page1)");
  });

// async functions
const sing = async () => {
  throw "OH NO, PROBLEM!";
  return "LA LA LA LA";
};

sing()
  .then((data) => {
    console.log("PROMISE RESOLVED WITH:", data);
  })
  .catch((err) => {
    console.log("OH NO, PROMISE REJECTED!");
    console.log(err);
  });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgifeetarecute") return "WELCOME!";
  throw "Invalid Password";
};

login("todd", "corgifeetarecute")
  .then((msg) => {
    console.log("LOGGED IN!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });

// await
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE!";
}

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}

printRainbow();

// errors
async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("CAUGHT AN ERROR!");
    console.log("error is:", e);
  }
}

makeTwoRequests();