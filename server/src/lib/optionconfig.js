// here define cors options
export const corsOption = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

// here can define createdDate functionality
export const getCurrentDate = () => {
  // declare object of date
  let dateObj = new Date();
  // here declare createdDate and return
  let createdDate = dateObj.toDateString();
  return createdDate;
};

// here can define createdTime functionality
export const getCurrentTime = () => {
  // here was declare object of time
  let timeObj = new Date();
  let hr = timeObj.getHours();
  let min = timeObj.getMinutes();
  let sec = timeObj.getSeconds();

  // declare fmt
  let fmt = "";

  // check condition of fmt is am or pm
  if (hr > 12) {
    hr = hr - 12;
    fmt = "PM";
  } else {
    fmt = "AM";
  }

  // here declare createdTime an return
  let createdTime = hr + ":" + min + ":" + sec + " " + fmt;

  return createdTime;
};
