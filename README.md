# TreeStruct
By using this program, you can create a text-based tree structure similar to a folder tree structure. To run it, you need to have Node.js installed on your system. Then, by cloning this repository and executing the following command, you can provide a JSON file as input and receive a text file named "tree.txt" as output, containing the desired tree structure.
```shell
node app.js path='input.json'
```

## Sample Input

```json
{
  "ocserv": {
    "Dockerfile": null,
    "entrypoint.sh": null,
    "ocserv.conf": null,
    "ocserv-install.sh": null,
    "README.md": null
  },
  "snap": {
    "lxd": {
      "22923": null,
      "24322": null,
      "common": null,
      "current": null
    }
  }
}
```

## Sample Output
```text
├── ocserv
    ├── Dockerfile
    ├── entrypoint.sh
    ├── ocserv.conf
    ├── ocserv-install.sh
    └── README.md
└── snap
    └── lxd
        ├── 22923
        ├── 24322
        ├── common
        └── current
```