# VueJs设计与实现(第一章)
1.  本章**从框架以及设计的角度**，说明了**声明式框架**和**命令式框架**的区别以及对比出了性能。
2.  **从性能消耗的角度**，权衡了之前的**JQuery**一类的框架为直接操作原生的DOM元素，文中提到直接操作DOM元素的**性能更好**。而后又提到了vue框架则是声明式的，并非像JQuery那样直接执行命令操作，因此从绝对主义上讲vue的性能是**不会**超过**原生命令式**的框架的性能
3.  **从用户使用心智负担角度**，声明式框架在给用户使用体验会非常优于命令式框架。尤其是用户在对整片大段的DOM进行操作的时候，使用命令式用户需要精确找到每一个DOM，然后发出指令使其更改。而使用声明式框架的时候，用户无需有那么多的心理负担，用户只需要修改数据，剩下的操作都讲交给vue来操作。
4.  就大段执行命令式改变的执行速度来说，纯javascript操作的速度要比操作DOM要快的多。因此vue引入了javascript创建DOM的概念，为了提高性能又引入的**虚拟DOM**，而后为了提升用户开发则引入**编译器（Compiler）** 将html书写方式编译成虚拟DOM，然后在通过新旧虚拟DOM的**对比**来改变值。
5.  最后，本章说明了三种框架，**运行时，运行时 + 编译时（vue3），编译时框架（svelte）** 。
