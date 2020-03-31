// Fibonacci
document.getElementById("calculate_fibonacci").addEventListener("click", event => {
  event.preventDefault();

  const step = Number(document.getElementById("step_input").value);

  if (step > 0) {
    let fibonacci_result = document.createElement("span");
    fibonacci_result.textContent = calculate_fibonacci(step);

    document.getElementById("fibonacci_result_container").appendChild(fibonacci_result);
  } else {
    alert("Please enter a valid number");
  }
});

const calculate_fibonacci = function(total = 1) {
  let initial = 0, counter = 1, value, result = "";

  while (total > 0) {
    // 0, 1, 1, 2, 3, 5, 8, 13 ...
    result += ` ${initial}`;
    value = counter;
    counter = counter + initial;
    initial = value;
    total--;
  }

  return result;
};

// Golden Ratio
document.getElementById("calculate_golden_ratio").addEventListener("click", event => {
  event.preventDefault();

  const whole_segment = Number(document.getElementById("segment_length_input").value);

  if (whole_segment > 0) {
    let golden_ratio_result = document.createElement("span");
    golden_ratio_result.textContent = JSON.stringify(calculate_golden_ratio(whole_segment));
    
    document.getElementById("golden_ratio_result_container").appendChild(golden_ratio_result);
  } else {
    alert("Please enter a valid number");
  }
});

const calculate_golden_ratio = function(total) {
  const aurea_const = 1.618;
  let a, b, small_section, large_section;

  small_section = Number((total / aurea_const).toFixed(4));
  large_section = Number((total - small_section).toFixed(4));

  return { small_section, large_section };
};
