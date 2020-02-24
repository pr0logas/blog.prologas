
# Why EOS node is the shittiest node ever?
---
###### 2020-02-24 || Category: BlockChain / EOS

![EOS_Node](https://raw.githubusercontent.com/pr0logas/blog.prologas/master/assets/images/eos_node.jpg)

As a Dev-Ops, I managed to run many different nodes for my own and business needs. Starting from Bitcoin / Dash / Ethereum / TRON / Waves and so on.
But we have to admit, EOS is a unique "creature" of all time.

My goal is to sync a FULL historical node with all the data inside the blocks. But it seems it's easier to say than actually to do it. To be in detail, trying to sync since 2019 August with no success.

My setup is pretty simple:

```
Ubuntu 18.04
Latest EOSIO node (https://github.com/EOSIO/eos/releases)
```

And the FULL node config:
```js
#/usr/bin/env bash

nodeos -e -p eseio \
--genesis-json='genesis.json' \
--plugin eosio::producer_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::state_history_plugin \
--filter-on="*" \
--access-control-allow-origin='*' \
--trace-history \
--chain-state-history \
--producer-threads='16' \
--chain-threads='16' \
--http-threads='16' \
--net-threads='16' \
--validation-mode=full \
--chain-state-db-size-mb=655360 \
--disable-replay-opts \
--sync-fetch-span='500000' \
--state-history-endpoint='127.0.0.1:8080' \
--http-server-address='0.0.0.0:8888' \
--http-validate-host=false \
--hard-replay-blockchain \
--p2p-peer-address='peer.main.alohaeos.com:9876' \
--p2p-peer-address='bp.cryptolions.io:9876' \
--p2p-peer-address='publicnode.cypherglass.com:9876' \
--p2p-peer-address='bp.eosbeijing.one:8080' \
--p2p-peer-address='mainnet.eoscalgary.io:5222' \
--p2p-peer-address='peering.mainnet.eoscanada.com:9876' \
--p2p-peer-address='p2p.eosdetroit.io:3018' \
--p2p-peer-address='peer1.mainnet.helloeos.com.cn:80' \
--p2p-peer-address='eos-seed-de.privex.io:9876' \
--verbose-http-errors >> nodeos.log 2>&1 &
```

If you need to update your seed list, you can catch them on third party website:

```https://eosnodes.privex.io/```

Note that the seed nodes can have different ports so you have strictly typed the IP/DNS and the port (have no idea why it's not hardcoded as BTC for example?).

``So far nothing serious so there is the problem?``

The EOS node problem is that:
```
Syncing on 1 CPU core; (I know, sounds like insanity for 100M+ blocks);
Don't have a graceful shutdown of any kind;
During the syncing HTTP API don't respond or have a latency out of normal understanding;
Gives you a non-fatal error but stops the syncing after all;
During non-gracefull shutdown asks for 'hard-replay-blockchain' which is slower than actual syncing!!!
Other no reason sync stops with no error or warn messages. As a bonus gives you stalled process :)
```

![EOS_ERROR](https://raw.githubusercontent.com/pr0logas/blog.prologas/master/assets/images/eos_dirtyflag.png)

![EOS_Node](https://raw.githubusercontent.com/pr0logas/blog.prologas/master/assets/images/eos_cpucore.png)


My best achievement 67M blocks out of 103M block. With that being said my personal opinion is that EOS is doomed to die any time soon. Because the aren't so much history nodes out there. If at all...

Contact me if you have a FULL historical EOS node copy and can share the data with me. Or just want to add something to this topic too. 

---