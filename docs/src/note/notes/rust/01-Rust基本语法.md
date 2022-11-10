# rust

## 一、base

1. 缩进为四个空格而不是tab
2. 要用`;`结尾

## 二、cargo

1. 创建新项目

```shell
cargo new hello-world
```

2. rust中第三方库叫`crate`
3. 主要代码放在`src`下面
4. 打包

```shell
cargo build
```

5. 运行

```shell
cargo run
```

6. 检查代码

```shell
cargo check # 检查代码
```

7. 发布构建

```shell
cargo build --release

# 生成文件在target/release而不是target/debug生成可执行文件
```

## 三、猜数字游戏

1. `std:io`

```rust
use std::io;


fn main() {
    println!("猜数字游戏!");

    println!("请输入你的猜测.");

    let mut guess = String::new();

    io::stdin().read_line(&mut guess).expect("读取行失败");
    
    println!("你猜测的数字: {}", guess);
}
```

2. cargo.lock

- 优先看lock版本，直接使用lock版本
- 更新版本，执行cargo update，会忽略lock文件 

- 2.1 **基础完成猜数字**

```rust
use std::{io, cmp::Ordering};
use rand::Rng;


fn main() {
    println!("猜数字游戏!");

    println!("请输入你的猜测.");

    let secret_number = rand::thread_rng().gen_range(1,101);

    println!("神秘数字是: {}",secret_number);

    let mut guess = String::new();

    io::stdin().read_line(&mut guess).expect("读取行失败");

    // shadow
    let guess:u32 = guess.trim().parse().expect("请输入数字!");

    println!("你猜测的数字: {}", guess);

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("太小了!"),
        Ordering::Greater => println!("太大了!"),
        Ordering::Equal => println!("猜对了!"),
    }
}
```

- 2.2 **完善猜数字游戏**

```rust
use std::{io, cmp::Ordering};
use rand::Rng;


fn main() {
    println!("猜数字游戏!");

    let secret_number = rand::thread_rng().gen_range(1,101);

    loop {
        println!("请输入你的猜测.");

        let mut guess = String::new();
    
        io::stdin().read_line(&mut guess).expect("读取行失败");
    
        // shadow
        let guess:u32 = match guess.trim().parse(){ 
            Ok(num) => num,
            Err(_) => continue,
        };
    
        println!("你猜测的数字: {}", guess);
    
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("太小了!"),
            Ordering::Greater => println!("太大了!"),
            Ordering::Equal => {
                println!("猜对了!");
                break;
            }
        }
    }

}
```

## 五、变量与可变性

### 5.1 可变和不可变

- 生命变量使用let关键词
- 默认情况，变量是不可变的(immutable)
- 生命变量时，在变量前面加上mut，就可以使变量可变

### 5.2 变量与常量

- 常量，常量在绑定值以后也是不可变的，但是它与不可变量有很多区别：
  - 不可使用mut，常量永远都是不可变的
  - 生命常量使用const关键字，他的类型必须被标注
  - 常量可以在任何作用域内进行声明，包括全局作用域
  - 常量只可以绑定到常量表达式，无法绑定到函数的调用结果或运行时才能计算出的值
- 在程序运行期间，常量在其声明的作用域内一直有效
- 命名规范： Rust中常量使用全大写字母，每个单词之间用下划线分开。

```rust
const MAX_POINTS:u32 = 100_000
```

- **隐藏**： 可以使用相同的名字生命新的变量，新的变量就会`shadow`之前声明的同名变量

```rust
// const MAX_OPTIONS: u32 = 100_000; // 常量

fn main() {
    let x = 5;
    let x = x + 1; // shadowing
    let x = x * 2; // shadowing

    let spaces = "   ";
    let spaces = spaces.len(); // shadowing

    println!("The value of  spaces is: {}", spaces);

    println!("{}", x);
}
```

## 六、数据类型

### 1. 标量和符合类型

- 编译器通常可以自动推断出类型
- 类型多（比如把String转为整数的parse方法），就必须添加类型的标注，否则编译会报错。

### 2. 标量类型

- 整数类型

  - 整数类型，没有小数部分
  - 例如u32 就是一个无符号的整数类型，占据32位的空间
  - 无符号整数类型以u开头
  - 有符号类型以i开头
  - 范围
    - 有符号范围`-(2^n - 1) 到(2^n-1 - 1)`
    - 无符号`0 到 2^n - 1`

  <img src="https://imgsbed-1301560453.cos.ap-shanghai.myqcloud.com/blog/image-20221106103744668.png" style="zoom:50%;" />

- 整数溢出

  - u8 最多为256，在正式环境超出则出现环绕

- 浮点类型

  - rust有两种基础的浮点类型，也就是含小数的部分的类型
    - f32 , 32位, 单精度
    - f64，64位，双精度
  - rust的浮点类型使用IEEE-754标准来表述
  - f64是默认类型，现代CPU上`f64`和`f32`速度差不多

- 布尔类型

```js
let f :bool = false;
```

- 字符类型: char
  - 使用单引号
  - 占用4个字节大小
  - 但是unicode中没有字符的概念

- 复合类型

  - 复合类型可以将多个值放到一个类型里
  - rust提供了两种基础的复合类型： `元组`，`数组`
  - Tuple

  ```rust
  fn main() {
      let tup: (i32,f64,u8) = (500, 6.4, 1);
      let (x,y,z) = tup;
  
      println!("The value of x is: {}", x);
      println!("The value of y is: {}", y);
      println!("The value of z is: {}", z);
  
      println!("The value of tup.0 is: {}", tup.0);
      println!("The value of tup.1 is: {}", tup.1);
      println!("The value of tup.2 is: {}", tup.2);
  }
  ```

  - 数组

    - 数组也可以放多个值到一个类型里
    - 数组中每个元素的类型必须相同
    - 数组的长度也是固定的
    - 数组用处
      - 将数组存储到stack没不是heap，保证有固定数量的元素
    - 数组类型 :     [类型;长度]
      - 超出数组访问，编译会通过，但是运行时会报错

    ```rust
    // 声明数组方式一
    let a: [i32;5] = [1,2,3,4,5]; 
    
    // 声明数组方式二
    let a = [3;5]; // 相当于 let a = [3,3,3,3,3];
    
    // 访问数组元素
    let first = a[0];
    let second = a[1];
    ```

  - Vector

    - 由标准库提供
    - Vector长度可以改变

  - fn函数

    - 函数会声明会提升
    - 函数**参数类型必须指明*

  ```rust
    fn main(){
      // 函数调用
      another_function(5,6);
    
      // 表达式
      let _x = plus_five(12ºª·
      println!("The value of x is: {}", _x);
    }
    
    fn another_function(x: i32, y: i32) {
        println!("The value of x is: {}", x);
        println!("The value of y is: {}", y);
    }
    
    fn plus_five(x:i32) -> i32 {
        x + 5
    }
    ```

## 七、if控制流

```rust
// if控制流
let number = 3;

if number < 5 {
  println!("condition was true");
} else {
  println!("condition was false");
}

// if表达式
let number = 6;

if number % 4 == 0{
  println!("number is divisible by 4");
} else if number % 3 == 0{
  println!("number is divisible by 3");
} else if number % 2 == 0{
  println!("number is divisible by 2");
} else {
  println!("number is not divisible by 4, 3, or 2");
}

// if表达式
let condition = true;

let number = if condition { 5 } else {6};

println!("The value of number is: {}", number);
```

## 八、循环

1. while 

```rust
let mut number = 3;

while number != 0 {
  println!("{}!", number);

  number = number - 1;
}

println!("LIFTOFF!!!");
```

2. for循环

```rust
let a = [10,20,30,40,50];

for element in a.iter() {
  println!("the value is: {}", element);
}

for number in (1..4).rev(){
  println!("{}!", number);
}
```

## 九、所有权

1. 什么是所有权

- rust核心特性就是所有权
- 所有程序运行时都必须管理他们使用计算机内存的方式
  - 有些语言则使用垃圾收集机制，在 程序运行时，他们会不断的寻找不再使用的内存
  - 在其他语言中，程序员必须显式得配合和释放内存
- Rust采取了第三种方式
  - 内存通过一个叫所有权系统来管理，其中包含一组编译器在编译时检查的规则。
  - 当程序运行时，所有权特性不会减慢程序的运行速度。
- Stack和Heap
  - Stack。后进先出，压入栈和弹出栈
  - Stack存储数据必须拥有已知固定的大小
    - 编译时 大小未知的数据或运行时大小可能发生变化的数据必须存放在`heap`上
  - Heap内存组织差点
    -   当你把数据放入heap中，你会请求一定数量空间
    - 操作系统在heap里找到一块足够大的空间，把它标记为在用，并返回一个指针，也就是这个空间的地址
    - 这个过程叫做heap上进行分配，有时仅仅叫做"分配"
- 访问数据速度对比
  - Stack访问比heap快，因为不要寻找内存地址
  - 数据存放距离比较近，则快
- 所有权解决的问题
  - 跟踪代码的哪些部分正在使用heap的哪些数据
  - 最小化heap上的重复数据量
  - 清理heap上未使用的数据以避免空间不足
- 所有权规则
  - 每个值都有一个变量，这个变量是该值的所有者
  - 每个值同时只能有一个所有者
  - 当所有者超出作用域时，该值将被删除
- 变量作用域（scope）
  - 参考JavaScript
- 内存分配
  - 字符串字面量： 不可改，会在编译时就被硬编码到代码中
  - String类型
    - 操作系统必须在**运行时**来请求内存
      - 这一步通过调用 `String::from`来实现
      - 当用完string之后，需要使用某种方式将内存返回给操作系统
        - 这一步骤，有GC的语言中，GC会跟踪并清理不再使用的内存
        - 没有GC，就需要门去识别内存何时不适用，并调用代码将它返回。
          - 如果忘了，那么就是浪费内存
          - 如果提前做了，变量就会非法
          - 如果做了两次，也是bug。必须一次分配对应一次释放。
  - 对于rust内存
    - rust对于某个值来说，**当拥有它的变量走出范围时，内存会立即自动的交还给操作系统**。
    - 超出作用域：rust会调用drop
- 变量和数据交互的方式：移动（move）
  - 浅拷贝（shallow copy）
  - 深拷贝（deep copy）
  - 在rust中，如果你将一个变量赋值给了另外一个变量，那么前一个变量会失效。从而防止内存二次释放的问题。
  - 下方代码，**s1不可被访问**

```rust
fn move_ownership() {
    let s1 = String::from("hello");

    let s2 = s1;

    println!("{}, world!", s1);
}
```

- Clone
  - 如果真的想对heap上的String数据进行深度拷贝，而不仅仅是stack上的数据，可以先试用`clone`方法

```rust
fn move_ownership() {
    let s1 = String::from("s1");

    let s2 = s1.clone();

    println!("{}, world!", s2);
}
```

- Stack上的数据： 复制

  - Copy trait，可以用于像整数这样完全存放在stack上面的类型

  - 如果一个类型实现copy这个trait，那么旧的变量在赋值后仍然可用

  - 如果一个类型或该类型的一部分实现Drop trait，那么Rust不允许让它再去实现Copy trait。

  - 一些拥有Copy trait类型

    - 任何简单标量的组合都可以是copy
    - 任何需要分配内存或某种资源都不是copy
    - 一些拥有copy trait类型
      - 所有的整数类型，例如u32
      - bool
      - char
      - 所有浮点类型，例如f64
      - Tuple（元组），如果其所有的字段都是Copy的
        - (i32,i32)是
        - (I32,String)不是
    - 总结 ： 没有实现copy的类型会move，跟传值还是引用没有直接关系

  ```rust
    fn move_and_copy() {
        let s = String::from("hello move"); // s comes into scope
    
        take_ownership(s);
    
        // println!("{}", s); //此时s不允许被访问
        
        let x = 5; // x comes into scope
    
        makes_copy(x);
    
        println!("{}", x); // x is still valid // 此时x被访问
    
    }
    
    fn take_ownership(something: String){
        println!("{}", something);
    }
    
    fn makes_copy(some_number: i32){
        println!("{}", some_number);
    }
    ```

- 函数返回值  
