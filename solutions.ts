export { }
function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string")
        return value.trim().toLowerCase();

    else if (typeof value === "number")
        return value * 10;

    else if (typeof value === "boolean")
        if (value === true) return "Active";
        else return "Inactive";

    else return "Invalid Input"
}

function formatCoordinate(value: readonly [number, number, string]): string {
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`
}

function concatenateArrays<T>(...arrays: T[]): T[] {
    let result: T[] = [];

    for (let i = 0; i < arrays.length; i++)
        result = result.concat(arrays[i]);

    return result;
}

interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    const result: Course[] = courses.filter(function (value) {
        if (value.isPublished && value.students >= minStudents)
            return value;
    })

    return result;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const result: T[K][] = items.map(function (value) {
        return value[key];
    })

    return result;
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


async function validateAgeAsync(age: number): Promise<string> {
    return new Promise(function (res, rej) {
        if (age >= 18) {
            setTimeout(function () {
                res("Access Granted");
            }, 1000)
        } else {
            rej(new Error("Access Denied: Must be 18 or older"));
        }
    })
}