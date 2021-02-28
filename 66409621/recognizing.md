# Question
compare two objects based on `styles` key and `device type` (e.g. mobile, or desktop) 

# Your Code
```jsx
const compareObj = ((prev, current) => {
  const top = {
      prev: prev.styles[device].top,
      current: current.styles[device].top,
  };
  const left = {
      prev: prev.styles[device].left,
      current: current.styles[device].left,
  };
  const width = {
      prev: prev.styles[device].width,
      current: current.styles[device].width,
  };
  const height = {
      prev: prev.styles[device].height,
      current: current.styles[device].height,
  };

  return {
      top: (top.prev < top.current ? top.prev : top.current) + 'px',
      left: (left.prev < left.current ? left.prev : left.current) + 'px',
      width: (left.prev > left.current
              ? left.prev + width.prev - left.current
              : left.current + width.current - left.prev) + 'px',
      height: (top.prev > top.current
              ? top.prev + height.prev
              : top.current + height.current) -
          (top.prev < top.current ? top.prev : top.current) + 'px',
  };
});

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

console.log(compareObj(dummies[0], dummies[1]));
```

# Your Code's Result
```
prev: prev.styles[device].top,
                        ^
ReferenceError: device is not defined
```

# Reason for your code's result
You called your `device` key from `styles` object, but it is  undefined value. 

# Solution
You need to check the variable(or key) you called is exist. 

# My code is
```jsx
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

// An array for your device type, to handle the case when you want to compare more device type.
// if you want to add more type such as 'tablet', just put it in this deviceTypes array!
const deviceTypes = ['mobile', 'desktop'];

// compare and reduce your style objects by device type!
const reducedStyles = deviceTypes.map(eachType => {
  return compareStyles(...dummies, eachType);
});

// check the result
console.log(JSON.stringify(reducedStyles));
```

# Output
```jsx
[
  { "height":"150px", "width":"150px", "left":"105px", "top":"175px" },
  { "height":"150px", "width":"150px", "left":"498px", "top":"91px" },
];
```

hope my answer might help your problem!
