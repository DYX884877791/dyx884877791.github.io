(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{289:function(a,t,r){"use strict";r.r(t);var e=r(0),i=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"kafka常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka常见问题","aria-hidden":"true"}},[a._v("#")]),a._v(" Kafka常见问题")]),a._v(" "),r("h2",{attrs:{id:"消息重复消费（保证消费时的幂等性）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息重复消费（保证消费时的幂等性）","aria-hidden":"true"}},[a._v("#")]),a._v(" 消息重复消费（保证消费时的幂等性）")]),a._v(" "),r("ol",[r("li",[a._v("采取每消费一条记录一条在缓存中，如果消费了比较一下，如果比较为真，可以不用消费了")]),a._v(" "),r("li",[a._v("CAS比较器")])]),a._v(" "),r("h2",{attrs:{id:"kafka消息顺序错乱的场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka消息顺序错乱的场景","aria-hidden":"true"}},[a._v("#")]),a._v(" Kafka消息顺序错乱的场景")]),a._v(" "),r("p",[a._v("Kafka能够保证生产者写道一个topic中所属的一个partition中的数据是有顺序的，生产者在写的时候，可以指定一个某个key(比如订单id作为key)，这个订单相关的数据，一定可被分发到一个partition中去，而且这个partition中的数据一定是有顺序的，一个消费者去消费一个partition，可以确保消费的顺序性，而且如果此时消费者内部有多个线程来并发消费，同样会造成消费不是按照顺序的，那么如何解决呢？")]),a._v(" "),r("p",[a._v("因为一系列的消息的key是一致的，可以这样，每个线程给它分配一个内存队列，因为key是一致的，对key进行哈希算法或者一致性哈希算法，把key相同的数据分发到同一个内存队列中，在这个内存队列中消息也是有顺序的，消费者的某一个线程就来消费，就可以保证顺序性了")]),a._v(" "),r("h2",{attrs:{id:"消息在队列中积压了几个小时，怎么快速消费处理？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息在队列中积压了几个小时，怎么快速消费处理？","aria-hidden":"true"}},[a._v("#")]),a._v(" 消息在队列中积压了几个小时，怎么快速消费处理？")]),a._v(" "),r("p",[a._v("假如消费者挂掉了，或者是消费者故障消费很慢，生产者一直在生产数据，造成数据的积压，如果消费者恢复了，如何快速地消费积压的数据？假设积压了几百万上千万的数据\n假设一个消费者消费数据写入数据库一秒消费1千条，恢复好的消费者要处理几百万的数据也要好几个小时，怎么解决？")]),a._v(" "),r("ol",[r("li",[a._v("紧急扩容处理。新建一个topic，但分区数扩大至原来的10倍，新建更多的消费者来消费（临时消费者数量可以为原来的10倍），原来的消费者并不写库，将消费数据写道新的topic中，新的临时消费者来消费这个topic中的数据并写库，消费速度可以提升10倍，消费完了可以撤掉临时消费者，回到原来的消费者")])])])},[],!1,null,null,null);t.default=i.exports}}]);