#include<stdio.h>

typedef struct node
{
    int value;
    int not_used;
} node; // the `typedef type name` allows you to create a new node by just using `node`
// otherwise you'd have to type `struct node` all over the place

int main(int argc, char* argv[])
{
    node node1;
    node node2;
    node* p;

    node1.value = 10;
    node2.value = 20;

    p = &node1; // addressof node1
    printf("%d\n", node1.value);
    printf("%d\n", node2.value);
    printf("%d\n", (*p).value); // equivalent to node1.value because p points to node1
    printf("%d\n", p->value); // equivalent to (*p).value
    printf("%d\n", (int)p); // the actual memory address that p holds

    p = &node2; // addressof node2
    printf("%d\n", node1.value);
    printf("%d\n", node2.value);
    printf("%d\n", (*p).value); // equivalent to node2.value because p is a reference to node2
    printf("%d\n", p->value); // equivalent to (*p).value
    printf("%d\n", (int)p); // the actual memory address that p holds

}
