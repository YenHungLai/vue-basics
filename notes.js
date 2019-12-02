// v-if
<div v-if="CONDITION">

</div>
<div v-else-if="CONDITION">

</div>
<div v-else="CONDITION">

</div>

// Use computed property when there is too much logic in your template
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

data: {
    message: 'Hello'
},
computed: {
    // a computed getter
    reversedMessage: function () {
    // `this` points to the vm instance
    return this.message.split('').reverse().join('')
    }
}

// You can declare a function in methods and achieve the same thing but computed methods are cached, as long as its dependencies do not change
// It will only be evaluated once, methods are always run.

// Computed properties are by default getter-only, but you can also provide a setter when you need it:
computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
}

// Use key attribute when you do not want Vue to reuse the same elements but re-render instead
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>


// v-for supports an optional second argument for you access index of the element, use if for :key ??
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>

// You can use v-for to iterate through objects as well 
v-for="item in items" will give you the value
v-for="(value, key) in items" will give you key and value.
v-for="(value, key, index) in items" plus index

// Kinda like range in Python
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>

Note that it’s not recommended to use v-if and v-for together. 

You can directly use v-for on a custom component, like any normal element
<my-component v-for="item in items" :key="item.id"></my-component>