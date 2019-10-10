(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{309:function(t,a,v){"use strict";v.r(a);var r=v(0),n=Object(r.a)({},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"分布式事务解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 分布式事务解决方案")]),t._v(" "),v("h2",{attrs:{id:"微服务系统下最大的挑战"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务系统下最大的挑战","aria-hidden":"true"}},[t._v("#")]),t._v(" 微服务系统下最大的挑战")]),t._v(" "),v("ol",[v("li",[t._v("数据的并发访问，修改")]),t._v(" "),v("li",[t._v("不同请求之间的数据隔离")]),t._v(" "),v("li",[t._v("多个服务共同完成一个业务请求，保证都完成或者失败")]),t._v(" "),v("li",[t._v("发生异常时的数据回滚")])]),t._v(" "),v("h2",{attrs:{id:"事务是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务是什么？")]),t._v(" "),v("p",[t._v("是以一种可靠、一致的方式，访问和操作数据库中的数据的程序单元，四大特性：ACID")]),t._v(" "),v("p",[t._v("A:原子性、C:一致性、I:隔离性、D:持久性")]),t._v(" "),v("p",[t._v("以A向B转账为例，A向B转账100元，涉及到两个操作，即A的账户减100元，B的账户加100元，")]),t._v(" "),v("h2",{attrs:{id:"事务的四大特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务的四大特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务的四大特性")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("原子性指的是这两个操作要不都成功，要不都失败，不能存在一个成功，一个失败的情况；")])]),t._v(" "),v("li",[v("p",[t._v("一致性是指事务使得系统从一个一致的状态转换到另一个一致状态。事务的一致性决定了一个系统设计和实现的复杂度，也导致了事务的不同隔离级别。事务可以不同程度的一致性：\n"),v("strong",[t._v("强一致性")]),t._v("：读操作可以立即读到提交的更新操作。\n"),v("strong",[t._v("弱一致性")]),t._v("：提交的更新操作，不一定立即会被读操作读到，此种情况会存在一个不一致窗口，指的是读操作可以读到最新值的一段时间。\n"),v("strong",[t._v("最终一致性")]),t._v("：是弱一致性的特例。事务更新一份数据，最终一致性保证在没有其他事务更新同样的值的话，最终所有的事务都会读到之前事务更新的最新值。如果没有错误发生，不一致窗口的大小依赖于：通信延迟，系统负载等。\n其他一致性变体还有：\n"),v("strong",[t._v("单调一致性")]),t._v("：如果一个进程已经读到一个值，那么后续不会读到更早的值。\n"),v("strong",[t._v("会话一致性")]),t._v("：保证客户端和服务器交互的会话过程中，读操作可以读到更新操作后的最新值。")])]),t._v(" "),v("li",[v("p",[t._v("隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。")])])]),t._v(" "),v("p",[t._v("并发事务之间互相影响的程度，比如一个事务会不会读取到另一个未提交的事务修改的数据。在事务并发操作时，可能出现的问题有：\n"),v("strong",[t._v("脏读")]),t._v("：事务A修改了一个数据，但未提交，事务B读到了事务A未提交的更新结果，如果事务A提交失败，事务B读到的就是脏数据。\n"),v("strong",[t._v("不可重复读")]),t._v("：在同一个事务中，对于同一份数据读取到的结果不一致。比如，事务B在事务A提交前读到的结果，和提交后读到的结果可能不同。不可重复读出现的原因就是事务并发修改记录，要避免这种情况，最简单的方法就是对要修改的记录加锁，这回导致锁竞争加剧，影响性能。另一种方法是通过MVCC可以在无锁的情况下，避免不可重复读。\n"),v("strong",[t._v("幻读")]),t._v("：在同一个事务中，同一个查询多次返回的结果不一致。事务A新增了一条记录，事务B在事务A提交前后各执行了一次查询操作，发现后一次比前一次多了一条记录。幻读是由于并发事务增加记录导致的，这个不能像不可重复读通过记录加锁解决，因为对于新增的记录根本无法加锁。需要将事务串行化，才能避免幻读。事务的隔离级别从低到高有：\n"),v("strong",[t._v("Read Uncommitted")]),t._v("：最低的隔离级别，什么都不需要做，一个事务可以读到另一个事务未提交的结果。所有的并发事务问题都会发生。\n"),v("strong",[t._v("Read Committed")]),t._v("：只有在事务提交后，其更新结果才会被其他事务看见。可以解决脏读问题。\n"),v("strong",[t._v("Repeated Read")]),t._v("：在一个事务中，对于同一份数据的读取结果总是相同的，无论是否有其他事务对这份数据进行操作，以及这个事务是否提交。可以解决脏读、不可重复读。\n"),v("strong",[t._v("Serialization")]),t._v("：事务串行化执行，隔离级别最高，牺牲了系统的并发性。可以解决并发事务的所有问题。\n通常，在工程实践中，为了性能的考虑会对隔离性进行折中。")]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("持久性（Durability）")])]),t._v(" "),v("p",[t._v("一旦事务被提交后，对系统的影响是永久的。")]),t._v(" "),v("h2",{attrs:{id:"事务的实现方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务的实现方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务的实现方式")]),t._v(" "),v("h3",{attrs:{id:"本地事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地事务","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地事务")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("SQL原生的事务机制，通过sql语句，开始事务")])]),t._v(" "),v("li",[v("p",[t._v("JDBC的事务管理")]),t._v(" "),v("p",[t._v("业务系统 ---\x3e Resource Manager(JDBC Driver) ---\x3e Resource(DataBase Connection)")]),t._v(" "),v("div",{staticClass:"language-java extra-class"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code")])])])]),t._v(" "),v("p",[t._v("connection.setAutoCommit(false)")]),t._v(" "),v("p",[t._v("...")]),t._v(" "),v("p",[t._v("connection.commit()或者connection.rollback()")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("\n3. JDBC的四种事务隔离级别：\n\n1. 未提交读\n2. 已提交读\n3. 可重复读\n4. 串行化\n\n4. Spring的事务管理机制\n\n### 分布式事务")])])])])},[],!1,null,null,null);a.default=n.exports}}]);