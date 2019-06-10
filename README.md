# kappa-cat

## Installation

Install globally:

```
$ npm install -g kappa-cat
$ kappa-cat [ARGS]
```

Or install and run on demand in a single step:

```
$ npx kappa-cat [ARGS]
```

## Usage

```
$ kappa-cat [-p | --pretty] $LOCAL_PATH

Print each message from a kappa-core multifeed.

Note that hypercores can only be used by one local process at a time, so
best to quit other kappa-core programs before running this one.

--pretty     Pretty-print the json on multiple lines.
$LOCAL_PATH  Path to local folder where kappa-core data is stored.
             For Cabal, this might be ~/.cabal/v1/archives/YOURKEY
```
