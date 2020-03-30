// Fibonacci
document.getElementById("calculate_fibonacci").addEventListener("click", event => {
  event.preventDefault();

  const step = Number(document.getElementById("step_input").value);

  if (step > 0) {
    const fibonacci = calculate_fibonacci(step);
    alert(JSON.stringify(fibonacci));
  } else {
    alert("Please enter a valid number");
  }
});

const calculate_fibonacci = function(total = 1) {
  let initial = 0, counter = 1, step = 0, value, result = {};

  while (total >= 0) {
    // 0, 1, 1, 2, 3, 5, 8, 13 ...
    result = { ...result, [`Step ${step + 1}`]: initial};
    value = counter;
    counter = counter + initial;
    initial = value;
    total--;
    step++;
  }

  return result;
};

// Golden Ratio
document.getElementById("calculate_golden_ratio").addEventListener("click", event => {
  event.preventDefault();

  const whole_segment = Number(document.getElementById("segment_length_input").value);

  if (whole_segment > 0) {
    const golden_ratio = calculate_golden_ratio(whole_segment);
    alert(JSON.stringify(golden_ratio));
  } else {
    alert("Please enter a valid number");
  }
});

const calculate_golden_ratio = function(total) {
  const aurea_const = 1.618;
  let a, b, small_section, large_section;

  small_section = total / aurea_const;
  large_section = total - small_section;

  return { total, small_section, large_section };
};
