# Results

This library uses [test-results-parser](https://github.com/test-results-reporter/parser) to read test results from different test frameworks.

## Supports

Test results reporter type.

✅ TestNG

✅ JUnit

✅ xUnit

## Arguments

#### > type (string)

Name of the test runner.

#### > files (string[])

Path to the test result files.

::: danger LIMITATIONS
- Currently it supports only one test results report file.
- No support for wildcard paths.
:::

## Config

Sample config file.

```json {11-14}
{
  "targets": [
    {
      "name": "teams",
      "inputs": {
        "url": "<incoming-webhook-url>"
      }
    }
  ],
  "results": [
    {
      "type": "testng",
      "files": ["path/to/testng-results.xml"]
    }
  ]
}
```