# Model\GenericCollection  

Class GenericCollection.

Represents a generic collection of objects.  

## Implements
IteratorAggregate, Traversable



## Methods

| Name | Description |
|------|-------------|
|[__construct](#genericcollection__construct)|Constructor.|
|[add](#genericcollectionadd)|Adds items to the collection.|
|[clear](#genericcollectionclear)|Removes all items from the collection.|
|[contains](#genericcollectioncontains)|Checks if the collection contains a given item.|
|[count](#genericcollectioncount)|Returns the number of items in the collection.|
|[first](#genericcollectionfirst)|Returns the first item in the collection.|
|[get](#genericcollectionget)|Returns the item at the given key.|
|[getIterator](#genericcollectiongetiterator)|Returns an iterator for the collection.|
|[isEmpty](#genericcollectionisempty)|Checks if the collection is empty.|
|[last](#genericcollectionlast)|Returns the last item in the collection.|
|[remove](#genericcollectionremove)|Removes items from the collection.|
|[set](#genericcollectionset)|Sets the item at the given key.|
|[usort](#genericcollectionusort)|Sorts the collection using a user-defined comparison function.|
|[values](#genericcollectionvalues)|Returns the values of the collection.|




### GenericCollection::__construct  

**Description**

```php
public __construct (mixed $values)
```

Constructor. 

 

**Parameters**

* `(mixed) $values`
: The items to add to the collection.  

**Return Values**

`void`


<hr />


### GenericCollection::add  

**Description**

```php
public add ( $values)
```

Adds items to the collection. 

 

**Parameters**

* `() $values`
: mixed The items to add to the collection.  

**Return Values**

`void`




<hr />


### GenericCollection::clear  

**Description**

```php
public clear (void)
```

Removes all items from the collection. 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`




<hr />


### GenericCollection::contains  

**Description**

```php
public contains (mixed $value)
```

Checks if the collection contains a given item. 

 

**Parameters**

* `(mixed) $value`
: The item to check.  

**Return Values**

`bool`

> True if the collection contains the item, false otherwise.


<hr />


### GenericCollection::count  

**Description**

```php
public count (void)
```

Returns the number of items in the collection. 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`int`




<hr />


### GenericCollection::first  

**Description**

```php
public first (void)
```

Returns the first item in the collection. 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`false|mixed`

> The first item in the collection, or false if the collection is empty.


<hr />


### GenericCollection::get  

**Description**

```php
public get (int $key)
```

Returns the item at the given key. 

 

**Parameters**

* `(int) $key`
: The key of the item to get.  

**Return Values**

`mixed|null`

> The item at the given key, or null if the key does not exist.


<hr />


### GenericCollection::getIterator  

**Description**

```php
public getIterator (void)
```

Returns an iterator for the collection. 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`\ArrayIterator`




<hr />


### GenericCollection::isEmpty  

**Description**

```php
public isEmpty (void)
```

Checks if the collection is empty. 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`bool`

> True if the collection is empty, false otherwise.


<hr />


### GenericCollection::last  

**Description**

```php
public last (void)
```

Returns the last item in the collection. 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`false|mixed`

> The last item in the collection, or false if the collection is empty.


<hr />


### GenericCollection::remove  

**Description**

```php
public remove ( $values)
```

Removes items from the collection. 

 

**Parameters**

* `() $values`
: mixed The items to remove from the collection.  

**Return Values**

`void`




<hr />


### GenericCollection::set  

**Description**

```php
public set (int $key, mixed $value)
```

Sets the item at the given key. 

 

**Parameters**

* `(int) $key`
: The key of the item to set.  
* `(mixed) $value`
: The value to set.  

**Return Values**

`void`




<hr />


### GenericCollection::usort  

**Description**

```php
public usort (callable $callback)
```

Sorts the collection using a user-defined comparison function. 

 

**Parameters**

* `(callable) $callback`
: The callback to use for sorting.  

**Return Values**

`void`




<hr />


### GenericCollection::values  

**Description**

```php
public values (void)
```

Returns the values of the collection. 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`array`

> The keys of the collection.


<hr />

