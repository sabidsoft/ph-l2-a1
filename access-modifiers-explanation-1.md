# TypeScript এ Access Modifier নিয়ে আলোচনা

## সূচনা

যেসব programming language এ OOP নিয়ে কাজ করা হয় সেখানে access modifier নিয়েও কাজ করা হয়। TypeScript এও access modifier এর ব্যবহার আছে (`public`, `private`, `protected`, `readonly`)। কোনটার কী কাজ আমরা ধাপে ধাপে দেখব।

## বর্ণনা

Access modifier আমরা class এ ব্যবহার করি। একটা class এ যখন আমরা কোনো property বা method নিয়ে কাজ করি তখন বলে দিই যে এই property বা method কি class এর বাইরে কেউ ব্যবহার করতে পারবে বা অন্য কোনো child class কি ব্যবহার করতে পারবে নাকি শুধুমাত্র নিজ class এই ব্যবহার হবে।

### public

যদি কোনো property বা method এ `public` ব্যবহার করা হয় তাহলে ওই property বা method সব জায়গা থেকে accessible। Class এর ভিতরে, বাইরে, child class এ, সব জায়গায়। কোনো access modifier ব্যবহার না করলে যেকোনো property বা method by default `public` হয়।

**উদাহরণ:**

```typescript
class Student {
    public name: string;

    constructor(name: string){
        this.name = name;
    }
}

const s1 = new Student("Sabid");
console.log(s1.name); // Output: Sabid;
```

### private

`private` access modifier যদি ব্যবহার করা হয়, তাহলে ওই class ছাড়া অন্য কেউ ব্যবহার করতে পারে না। Child class অথবা object create করার পর ব্যবহার করতে পারবে না।

**উদাহরণ:**

```typescript
class Student {
    private name: string;

    constructor(name: string){
        this.name = name;
    }
}

const s1 = new Student("Sabid");
console.log(s1.name); // Error
```

### protected

`protected` access modifier ব্যবহার করলে ওই property বা method শুধুমাত্র ওই class এবং child class ব্যবহার করতে পারে।

**উদাহরণ:**

```typescript
class Student {
    protected name: string;

    constructor(name: string){
        this.name = name;
    }
}

class CR extends Student{
    constructor(name: string){
        super(name);
    }

    getName(){
        return this.name;
    }
}

const s1 = new Student("Sabid");
console.log(s1.name); // Error

const cr = new CR("Sabid");
console.log(cr.getName()); // Output: Sabid
```

### readonly

কোনো property এর আগে `readonly` ব্যবহার করলে ওই property শুধু read করা যায়, পরিবর্তন করা যায় না। `readonly` method এ ব্যবহার করা হয় না।

**উদাহরণ:**

```typescript
class Student {
    readonly name: string;

    constructor(name: string){
        this.name = name;
    }

    setName(){
        this.name = "Hasan"; // Error
    }
}
```

## উপসংহার

আমরা বিভিন্ন সময় বিভিন্ন প্রয়োজনে access modifier ব্যবহার করি। Access modifier ব্যবহার করে আমরা আমাদের data secure করতে পারি।