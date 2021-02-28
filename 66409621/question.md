# The link of this question
[Loop an array of objects and get a new object based on comparing objects values](https://stackoverflow.com/questions/66409621/loop-an-array-of-objects-and-get-a-new-object-based-on-comparing-objects-values/66410417#66410417)
---

I have this array:

```jsx
[
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
```

How can i loop through it and based on styles key and device type (desktop or mobile), compare their values and then get an object with these properties?

```jsx
{
  desktop: {
    // based on desktop
    top: "least top value in desktop styles objects",
    left: "least left value in desktop styles objects",
    width: "(most left value in desktop styles objects + that object width) - least left value in desktop styles objects",
    height: "(most top value in desktop styles objects + that object height) - least top value in desktop styles objects"
  },
  mobile: {
    // same as desktop values but with mobile styles objects
  }
}
```
I tried using this reduce function but can't figure it out properly.

```jsx
array.reduce((prev, current) => {
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
```

This works for 2 items in array and only give the desktop object values