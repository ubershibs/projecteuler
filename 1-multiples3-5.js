function MyCount() {
var i = 1
var total = 0

while (i < 1000) {
    if (i % 3 == 0) {
        total += i;
        i++;
    } else if (i % 5 == 0) {
        total += i;
        i++;
    }
    else {
        i++;
    }
};

return total;
}

MyCount();