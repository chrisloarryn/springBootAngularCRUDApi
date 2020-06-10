
Integer[] presets = {1, 3, 13, 15, 17, 19, 21, 23, 31, 34, 40, 51, 54, 68};
Integer num = 51;
presets.stream()
        .filter(n -> n === num)
        .findFirst()
        .orElse(null);

