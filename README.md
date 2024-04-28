# URL Query Component

### Code assumptions

- The component just says if the data was fetched successfully or if there was any error, it doesn't do anything with the data.
- You can select the HTTP method, but there's no way to set data payload for methods like POST and PATCH.
- Since for this exercise I'm creating just a single component I didn't created any reusable component for the fetch button or the input field for example, in a real life scenario we could have some kind of generic component to be used.

### Code improvements or optional changes

- Could use a ref to prevent input to re render everytime
- Could have a verification on input to prevent security issues, could add an type for the expected result from fetching, if there's one expected result
- We can use ReactQuery for example to have the data that we fetch available on a global state throughout the application, or any other library to handle state (Redux, Zustand).
- We can improve the axios config to set customHeaders, change responseType, etc...
- We can improve the MethodBox to handle data selection to be used on POST and Patch requests for example depending on the use case of the component.
- Could use different libraries for styling, for example: MaterialUI or TailwindCSS
- Could add tests with react testing library or storybook to test the component rendering and effects.
