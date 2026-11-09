# TypeScript-এ Union (|) এবং Intersection (&) টাইপগুলোকে একত্রিত করার একটি ব্যবহারিক উদাহরণ

Union (`|`) ব্যবহার করা হয় তখন, যখন একাধিক type এর মধ্যে যেকোনো একটা match করলেই হবে। আর Intersection (`&`) ব্যবহার করা হয় তখন, যখন একাধিক type এর সবগুলোরই দরকার পড়ে। Union এবং Intersection combine করেও ব্যবহার করা যায়। নিচে practical উদাহরণ দেওয়া হলো।

**উদাহরণ:**

```typescript
type MaleCR = {
    name: string,
    id: number,
};

type FemaleCR = {
    age: number,
    department: string,
};

type CoCR = {
    cgpa: number,
}

type Students = MaleCR & FemaleCR | CoCR;

const student: Students = {
    name: "sabid",
    id: 10,
    age: 10,
    department: "CSE",
    cgpa: 3.94,
}

console.log(student);
```