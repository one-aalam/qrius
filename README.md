# qrius
A very minimal HackerNews clone, built outta qriusity https://qrius.one-aalam.now.sh/

## Details
Built using NextJS for allowing SSR with very manageable constructs and decent Lighthouse score out of the box. State is managed using React Hooks (defaults + custom)

## Recommended workflow for releases
 

1. Make changes
1. Commit/Merge those changes
1. Make sure Travis turns green
1. Bump version in `package.json` (run `yarn version`)
1. Commit `package.json` and `CHANGELOG.md` files
1. Tag
1. Push
