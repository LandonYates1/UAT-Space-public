#sample UML diagram for csc 102 by Landon Yates<br>
#LANYATES@uat.edu

Create a diagram with 2 classes, 3 attributes, 3 methods
```mermaid
    classDiagram
    class Shape{
        -length
        -width
        +getLength()
        +setLength()
        +getWidth()
        +setWidth()
    }
    class ShapeSig{
        -length : int
        -width : int
        +getLength() : int
        +setLength(n : int) : void
        +getWidth() : int
        +setWidth(n : int) : void 
    }
```
Attributes come before properties or methods<br>
\+ public, \- private, \# protected<br>
```mermaid
    classDiagram
    class superClass{

    }
    class subClass1{

    }
    class subClass2{

    }
    superClass <|-- subClass1
    superClass <|-- subClass2
```