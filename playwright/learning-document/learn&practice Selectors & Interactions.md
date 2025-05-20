# Summary

## Best Practice

### Test user-visible behavior

### Make tests as isolated as possible

### Avoid testing 3rd-party dependencies 

### Testing with database (control data)

## Command

### Run test
```
$npx playwright test
$npx playwright show-report
```

### Run test in UI Mode and watch all test cases
```
$npx playwright test --ui
```

### Visual testing
```
$npx playwright test
$npx playwright test --update-snapshots
```

### Run by tag

- run all test that include tag by @xxx
```
$npx playwright test --grep @xyz
```
- run all test that exclude tag by @xxx
```
$npx playwright test --grep-invert @xyz
```

