#include<stdio.h>

int main(int argc, char* argv[])
{
    int a;
    int b;
    a = 10;
    b = 20;
    int* p; // p is a pointer

    p = &a;
    // the & means: the location in memory of __ (&a = memory address of a)
    printf("p = &a\n");
    printf("%d\n", a); // 10
    printf("%d\n", b); // 20
    printf("%d\n", *p); // 10
    // the  * before the pointer variable means "dereference this pointer"
    // i.e. get the thing at the memory address the pointer points to
    printf("%d\n", (int)p); // some big number that is a memory address

    p = &b;
    printf("p = &b\n");
    printf("%d\n", a); // 10
    printf("%d\n", b); // 20
    printf("%d\n", *p); // 20
    printf("%d\n", (int)p); // some big number that is a memory address

    return 0;

}
