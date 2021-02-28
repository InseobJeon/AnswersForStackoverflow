// the dummy data you will use
const dummies = [
  {
    id: "17CVqaiM",
    styles: {
      desktop: {
        height: 163,
        width: 163,
        left: 498,
        top: 350
      },
      mobile: {
        height: 150,
        width: 150,
        left: 135,
        top: 205
      }
    }
  },
  {
    id: "xL-4vIfV",
    styles: {
      desktop: {
        height: 150,
        width: 150,
        left: 675,
        top: 91
      },
      mobile: {
        height: 150,
        width: 150,
        left: 105,
        top: 175
      }
    }
  }
];

// function for comparing the style by device type
const compareStyles = (prev, current, deviceType) => {
  const prevDeviceStyle = prev.styles[deviceType];
  const currentDeviceStyle = current.styles[deviceType];

  // set variable combinedStyleObject for return 
  const combinedStyleObject = {};

  // compare prev and current style object with using for-in loop
  for (const eachProperty in prevDeviceStyle) {
    if (prevDeviceStyle[eachProperty] < currentDeviceStyle[eachProperty]) {
      combinedStyleObject[eachProperty] = `${prevDeviceStyle[eachProperty]}px`;
      continue;
    }
    combinedStyleObject[eachProperty] = `${currentDeviceStyle[eachProperty]}px`;
  }

  // return combinedStyleObject
  return combinedStyleObject;
};

// An array for your device type
// if you want to add more type such as 'tablet', just put it in this deviceTypes array!
const deviceTypes = ['mobile', 'desktop'];

// compare and reduce your style objects by device type!
const reducedStyles = deviceTypes.map(eachType => {
  return compareStyles(...dummies, eachType);
});

console.log(JSON.stringify(reducedStyles));




