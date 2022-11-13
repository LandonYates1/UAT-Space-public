#UML diagram for csc 102 by Landon Yates<br>
#LANYATES@uat.edu

```mermaid
ClassRocket{
    Class size{
        -length : int
        -width : int
        +getLength() : int
        +setLength(n : int) : void
        +getWidth() : int
        +setWidth(n : int) : void 
    }
    Class Model{
        -model : String
        +getModel(n : String)
    }
    Class blastOff{
        -time
        +takeOff(String)
    }
Class rocketScientist{
    Class name{
        -name : String
    }
    Class Department
        -job : string
        -hours : int
        }
    Class Money
    payHourly : int
    payMonthly : int
    payYearly : int
}
size <|-- length
size <|-- width
```