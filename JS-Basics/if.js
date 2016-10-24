/**
 * Created by Florian on 24.10.2016.
 */

const opt1 = false;
const opt2 = false;

if (opt1 && opt2)
  console.log('Both true');
else if (opt1 && !opt2)
  console.log('Only opt1 true');
else if (!opt1 && opt2)
  console.log('Only opt2 true');
else
  console.log('Both false');
