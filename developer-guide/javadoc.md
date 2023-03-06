# PHPDoc

## Table of Contents

- [**ScholarAuthor**](#ScholarAuthor)
- [**ScholarAuthorCollection**](#ScholarAuthorCollection)
    - [ScholarAuthorCollection::__construct](#ScholarAuthorCollection__construct) : Constructor.
- [**ScholarCoauthor**](#ScholarCoauthor)
- [**ScholarCoauthorCollection**](#ScholarCoauthorCollection)
    - [ScholarCoauthorCollection::__construct](#ScholarCoauthorCollection__construct) : Constructor.
- [**ScholarPublication**](#ScholarPublication)
    - [ScholarPublication::get_non_array_fields](#ScholarPublicationget_non_array_fields) : Returns an associative array
      of the fields of the ScholarPublication class.
- [**ScholarPublicationCollection**](#ScholarPublicationCollection)
    - [ScholarPublicationCollection::__construct](#ScholarPublicationCollection__construct) : Constructor.

---

## ScholarAuthor

Class ScholarAuthor.

Represents an author on Google Scholar.

* Full name: \Model\ScholarAuthor
* Parent class: \Model\ScholarCoauthor

---

## ScholarAuthorCollection

Class ScholarAuthorCollection.

Represents a collection of ScholarAuthor objects.

* Full name: \Model\ScholarAuthorCollection
* Parent class: \Model\GenericCollection

### ScholarAuthorCollection::__construct

Constructor.

```php
ScholarAuthorCollection::__construct( \Model\ScholarAuthor authors ): mixed
```

**Parameters:**

| Parameter | Type                     | Description                           |
|-----------|--------------------------|---------------------------------------|
| `authors` | **\Model\ScholarAuthor** | The authors to add to the collection. |

**Return Value:**





---

## ScholarCoauthor

Class ScholarCoauthor.

Represents a coauthor of a ScholarAuthor.

* Full name: \Model\ScholarCoauthor

---

## ScholarCoauthorCollection

Class ScholarCoauthorCollection.

Represents a collection of ScholarCoauthor objects.

* Full name: \Model\ScholarCoauthorCollection
* Parent class: \Model\GenericCollection

### ScholarCoauthorCollection::__construct

Constructor.

```php
ScholarCoauthorCollection::__construct( \Model\ScholarCoauthor coauthors ): mixed
```

**Parameters:**

| Parameter   | Type                       | Description                             |
|-------------|----------------------------|-----------------------------------------|
| `coauthors` | **\Model\ScholarCoauthor** | The coauthors to add to the collection. |

**Return Value:**





---

## ScholarPublication

Class ScholarPublication.

Represents a publication of a ScholarAuthor.

* Full name: \Model\ScholarPublication

### ScholarPublication::get_non_array_fields

Retourne un tableau associatif des champs de la classe ScholarPublication.

```php
ScholarPublication::get_non_array_fields(  ): array
```

La clé est le nom du champ et la valeur est le nom du champ avec les underscores remplacés par des espaces et la
première lettre en majuscule.

* This method is **static**.

**Return Value:**





---

## ScholarPublicationCollection

Class ScholarPublicationCollection.

Represents a collection of ScholarPublication objects.

* Full name: \Model\ScholarPublicationCollection
* Parent class: \Model\GenericCollection

### ScholarPublicationCollection::__construct

Constructor.

```php
ScholarPublicationCollection::__construct( \Model\ScholarPublication publications ): mixed
```

**Parameters:**

| Parameter      | Type                          | Description                                |
|----------------|-------------------------------|--------------------------------------------|
| `publications` | **\Model\ScholarPublication** | The publications to add to the collection. |

**Return Value:**
