#include <iostream>
using namespace std;

int main()
{
    int age1;     // uninitialized bad
    int age2 = 5; // c-style
    int age3(5);  // constructor initialization
    int age4{5};  // modern initialization: preferred

    cout << age1 << endl;
    cout << age2 << endl;
    cout << age3 << endl;
    cout << age4 << endl;
}